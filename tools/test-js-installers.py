"""在临时目录验证安装器；不触及真实 WPS 配置或注册表。"""
import importlib.util
import json
import os
from pathlib import Path
import shutil
import subprocess
import tempfile
import unittest
import uuid
from unittest.mock import patch
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('gw_installer', ROOT / 'Installer/linux/install.py')
installer = importlib.util.module_from_spec(spec)
spec.loader.exec_module(installer)


class LinuxInstallerTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory(prefix='gw-install-')
        self.addCleanup(self.temporary.cleanup)
        self.root = Path(self.temporary.name) / '用户 data'
        self.root.mkdir()
        self.config = self.root / 'publish.xml'
        self.config.write_text('<jsplugins><!--保留--><jsplugin name="other" type="wps" url="https://example.invalid/a?b=1&amp;c=2" enable="disable"/><jsplugin name="gw_mika" type="et" /></jsplugins>', encoding='utf-8')
        self.payload = Path(self.temporary.name) / 'payload'
        self.payload.mkdir()
        for name in ('main.js', 'ribbon.xml', 'index.html', 'js/ribbon.js'):
            path = self.payload / name
            path.parent.mkdir(exist_ok=True)
            path.write_text('first', encoding='utf-8')
        self.version('4.0.2')

    def version(self, value):
        (self.payload / 'install.json').write_text(json.dumps({'id': 'gw_mika', 'version': value}), encoding='utf-8')

    def entries(self):
        return ET.parse(self.config).getroot().findall('jsplugin')

    def install(self):
        installer.update(self.root, self.payload)

    def test_install_upgrade_uninstall_preserves_other_addins(self):
        self.install()
        self.install()
        self.assertEqual(3, len(self.entries()))
        self.version('4.0.3')
        self.install()
        self.assertFalse((self.root / 'gw_mika_4.0.2').exists())
        ours = [item for item in self.entries() if item.get('name') == 'gw_mika' and item.get('type') == 'wps']
        self.assertEqual(['gw_mika_4.0.3'], [item.get('url') for item in ours])
        installer.update(self.root, uninstall=True)
        self.assertEqual(['other', 'gw_mika'], [item.get('name') for item in self.entries()])
        self.assertEqual('disable', self.entries()[0].get('enable'))
        self.assertFalse((self.root / 'gw_mika_4.0.3').exists())

    def test_invalid_xml_is_untouched(self):
        self.config.write_text('<broken', encoding='utf-8')
        with self.assertRaises(ET.ParseError):
            self.install()
        self.assertEqual(b'<broken', self.config.read_bytes())
        self.assertFalse((self.root / 'gw_mika_4.0.2').exists())

    def test_missing_payload_does_not_change_config(self):
        original = self.config.read_bytes()
        (self.payload / 'ribbon.xml').unlink()
        with self.assertRaises(ValueError):
            self.install()
        self.assertEqual(original, self.config.read_bytes())

    def test_first_install_failure_leaves_no_state(self):
        original = self.config.read_bytes()
        real_write = installer.atomic_write
        def fail_config(path, content):
            if path == self.config:
                raise PermissionError('配置只读')
            real_write(path, content)
        with patch.object(installer, 'atomic_write', side_effect=fail_config), self.assertRaises(PermissionError):
            self.install()
        self.assertEqual([self.config], list(self.root.iterdir()))
        self.assertEqual(original, self.config.read_bytes())

    def test_dtd_rejected_in_utf16(self):
        content = '<!DOCTYPE jsplugins><jsplugins/>'.encode('utf-16')
        self.config.write_bytes(content)
        with self.assertRaises(ValueError):
            self.install()
        self.assertEqual(content, self.config.read_bytes())

    def test_does_not_replace_unowned_directory(self):
        target = self.root / 'gw_mika_4.0.2'
        target.mkdir()
        marker = target / 'keep.txt'
        marker.write_text('untouched')
        with self.assertRaises(FileNotFoundError):
            self.install()
        self.assertEqual('untouched', marker.read_text())

    def test_config_write_failure_rolls_back_same_version(self):
        self.install()
        uninstaller = self.root / '.gw_mika/uninstall.py'
        uninstaller.write_bytes(b'previous uninstaller')
        original = self.config.read_bytes()
        (self.payload / 'main.js').write_text('new')
        real_write = installer.atomic_write
        # 同版本 XML 可能完全相同，因此只让第一次配置写入失败。
        failed = False
        def fail_once(path, content):
            nonlocal failed
            if path == self.config and not failed:
                failed = True
                raise PermissionError('simulate config write failure')
            real_write(path, content)
        with patch.object(installer, 'atomic_write', side_effect=fail_once):
            with self.assertRaises(PermissionError):
                self.install()
        self.assertEqual(original, self.config.read_bytes())
        self.assertEqual('first', (self.root / 'gw_mika_4.0.2/main.js').read_text())
        self.assertEqual(b'previous uninstaller', uninstaller.read_bytes())

    def test_uninstall_preserves_directory_with_wrong_marker_version(self):
        self.install()
        original = self.config.read_bytes()
        marker = self.root / 'gw_mika_4.0.2/install.json'
        marker.write_text(json.dumps({'id': 'gw_mika', 'version': '4.0.3'}))
        with self.assertRaises(ValueError):
            installer.update(self.root, uninstall=True)
        self.assertTrue(marker.is_file())
        self.assertEqual(original, self.config.read_bytes())

    def test_malicious_state_cannot_delete_outside_root(self):
        self.install()
        outside = Path(self.temporary.name) / 'outside'
        outside.mkdir()
        (self.root / '.gw_mika/state.json').write_text(json.dumps({'id': 'gw_mika', 'folders': ['../outside']}))
        with self.assertRaises(ValueError):
            installer.update(self.root, uninstall=True)
        self.assertTrue(outside.exists())


@unittest.skipUnless(os.name == 'nt' and shutil.which('powershell.exe'), 'Windows PowerShell is unavailable')
class WindowsRegistrationTests(LinuxInstallerTests):
    def test_registry_restore_in_isolated_keys(self):
        import winreg
        base = 'Software\\gw_mika_test_' + uuid.uuid4().hex
        script = self.root.parent / 'registration.ps1'
        source = (ROOT / 'Installer/register-wps-js.ps1').read_text(encoding='utf-8-sig')
        paths = [base + '\\AddinsWL', base + '\\AddinsBL']
        script.write_text(source.replace(r'Software\Kingsoft\Office\WPS\Addins', base + r'\Addins'), encoding='utf-8-sig')
        self.assertNotIn(r'Software\Kingsoft', script.read_text(encoding='utf-8-sig'))
        self.install()
        name = 'gw_mika.公文准式'
        try:
            for values in [[('%TEMP%', winreg.REG_EXPAND_SZ), (b'\xff', winreg.REG_BINARY)],
                           [(['one'], winreg.REG_MULTI_SZ), (2**40, winreg.REG_QWORD)]]:
                for path, (value, kind) in zip(paths, values):
                    with winreg.CreateKey(winreg.HKEY_CURRENT_USER, path) as key:
                        winreg.SetValueEx(key, name, 0, kind, value)
                for action in ('Install', 'Install', 'Uninstall'):
                    self.run_registration(action, script=script, migrate=True)
                for path, expected in zip(paths, values):
                    with winreg.OpenKey(winreg.HKEY_CURRENT_USER, path) as key:
                        self.assertEqual(expected, winreg.QueryValueEx(key, name))
        finally:
            for path in paths + [base]:
                try:
                    winreg.DeleteKey(winreg.HKEY_CURRENT_USER, path)
                except FileNotFoundError:
                    pass

    def test_install_preflight_checks_existing_directory_ownership(self):
        self.run_registration('CheckInstall')
        target = self.root / 'gw_mika_4.0.2'
        target.mkdir()
        self.run_registration('CheckInstall', success=False)
        marker = target / 'install.json'
        marker.write_text('{"id":"other","version":"4.0.2"}')
        self.run_registration('CheckInstall', success=False)
        marker.write_bytes((self.payload / 'install.json').read_bytes())
        self.run_registration('CheckInstall')

    def test_preflight_checks_registry_state_before_changing_files(self):
        original = self.config.read_bytes()
        state = self.root / '.gw_mika-registry.json'
        state.write_text('{"Id":"gw_mika","Registry":[]}')
        for action in ('CheckInstall', 'Check'):
            self.run_registration(action, success=False)
        self.assertEqual(original, self.config.read_bytes())

    def run_registration(self, action, success=True, script=None, migrate=False):
        metadata = json.loads((self.payload / 'install.json').read_text())
        result = subprocess.run(['powershell.exe', '-NoLogo', '-NoProfile', '-NonInteractive', '-ExecutionPolicy', 'Bypass',
            '-File', str(script or ROOT / 'Installer/register-wps-js.ps1'), '-Action', action, '-DataRoot', str(self.root),
            '-Version', metadata['version']] + (['-MigrateLegacyVsto'] if migrate else []), capture_output=True)
        self.assertEqual(success, result.returncode == 0, result.stdout + result.stderr)

    def install(self):
        version = json.loads((self.payload / 'install.json').read_text())['version']
        shutil.copytree(self.payload, self.root / ('gw_mika_' + version), dirs_exist_ok=True)
        self.run_registration('Install')

    def test_install_upgrade_uninstall_preserves_other_addins(self):
        self.install()
        self.install()
        self.version('4.0.3')
        self.install()
        self.assertEqual(3, len(self.entries()))
        self.run_registration('Uninstall')
        self.assertEqual(['other', 'gw_mika'], [item.get('name') for item in self.entries()])
        self.assertEqual('disable', self.entries()[0].get('enable'))

    def test_invalid_xml_is_untouched(self):
        self.config.write_text('<broken')
        self.run_registration('Check', success=False)
        self.run_registration('Install', success=False)
        self.assertEqual(b'<broken', self.config.read_bytes())

    def test_utf16_configuration_remains_readable(self):
        self.config.write_text('<?xml version="1.0" encoding="utf-16"?><jsplugins><jsplugin name="其他加载项" type="wps"/></jsplugins>', encoding='utf-16')
        self.install()
        self.assertEqual('其他加载项', self.entries()[0].get('name'))

    def test_first_install_without_configuration(self):
        self.config.unlink()
        self.install()
        self.assertEqual(['gw_mika'], [item.get('name') for item in self.entries()])
        self.run_registration('Uninstall')
        self.assertEqual([], self.entries())

    def test_missing_payload_does_not_change_config(self):
        original = self.config.read_bytes()
        self.run_registration('Install', success=False)
        self.assertEqual(original, self.config.read_bytes())

    # Windows 文件生命周期由 Inno Setup 管理；下面的目录测试仅针对 Linux 安装器。
    test_does_not_replace_unowned_directory = None
    test_uninstall_preserves_directory_with_wrong_marker_version = None
    test_config_write_failure_rolls_back_same_version = None
    test_malicious_state_cannot_delete_outside_root = None
    test_first_install_failure_leaves_no_state = None
    test_dtd_rejected_in_utf16 = None


if __name__ == '__main__':
    unittest.main(verbosity=2)
