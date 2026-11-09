#!/usr/bin/env python3
"""公文准式：仅使用 Python 标准库的 Linux 当前用户 JS 安装器。"""
import argparse
import json
import os
from pathlib import Path
import re
import shutil
import sys
import tempfile
import xml.etree.ElementTree as ET
from contextlib import contextmanager

APP_ID = 'gw_mika'
ALIASES = {APP_ID, 'gw_mika-wps-js'}


def default_root():
    # 与 WPS 官方工具一致；不把 Windows / Wine 的配置写到 Linux 宿主。
    return Path.home() / '.local/share/Kingsoft/wps/jsaddons'


def load_config(path):
    if not path.exists():
        return ET.ElementTree(ET.Element('jsplugins'))
    content = path.read_bytes()
    if b'<!DOCTYPE' in content.upper():
        raise ValueError('publish.xml 不允许包含 DTD，原配置已保留。')
    tree = ET.ElementTree(ET.fromstring(content, ET.XMLParser(target=ET.TreeBuilder(insert_comments=True))))
    if tree.getroot().tag != 'jsplugins':
        raise ValueError('publish.xml 的根元素不是 jsplugins，原配置已保留。')
    return tree


def atomic_write(path, content):
    descriptor, name = tempfile.mkstemp(prefix=path.name + '.', dir=path.parent)
    try:
        with os.fdopen(descriptor, 'wb') as stream:
            stream.write(content)
            stream.flush()
            os.fsync(stream.fileno())
        os.replace(name, path)
    finally:
        if os.path.exists(name):
            os.unlink(name)


def json_bytes(value):
    return (json.dumps(value, ensure_ascii=False, indent=2) + '\n').encode('utf-8')


def owned_directory(root, folder):
    if not re.fullmatch(r'gw_mika_\d+\.\d+\.\d+', folder):
        raise ValueError('拒绝操作未知加载项目录：' + folder)
    target = root / folder
    if target.is_symlink() or target.resolve().parent != root.resolve():
        raise ValueError('加载项目录不能是符号链接或位于安装目录外。')
    if target.exists():
        marker = json.loads((target / 'install.json').read_text(encoding='utf-8'))
        if marker.get('id') != APP_ID:
            raise ValueError('目录不属于公文准式：' + str(target))
    return target


@contextmanager
def locked(root):
    import fcntl
    root.mkdir(parents=True, exist_ok=True)
    with (root / '.gw_mika.lock').open('a') as stream:
        fcntl.flock(stream, fcntl.LOCK_EX | fcntl.LOCK_NB)
        yield


def update(root, payload=None, uninstall=False):
    """调用方持有目录锁；单独导出便于在临时目录验证升级和故障处理。"""
    root = root.resolve()
    root.mkdir(parents=True, exist_ok=True)
    config = root / 'publish.xml'
    state_dir = root / '.gw_mika'
    state_file = state_dir / 'state.json'
    if state_dir.is_symlink() or config.is_symlink():
        raise ValueError('配置或状态目录不能是符号链接。')
    tree = load_config(config)
    old_config = config.read_bytes() if config.exists() else None
    state = json.loads(state_file.read_text(encoding='utf-8')) if state_file.exists() else {'id': APP_ID, 'folders': []}
    if state.get('id') != APP_ID:
        raise ValueError('安装状态不属于公文准式。')
    old_targets = [owned_directory(root, item) for item in state['folders']]
    for node in list(tree.getroot()):
        if node.tag == 'jsplugin' and node.get('name') in ALIASES and node.get('type') == 'wps':
            tree.getroot().remove(node)

    if uninstall:
        if config.exists():
            atomic_write(config, ET.tostring(tree.getroot(), encoding='utf-8', xml_declaration=True))
        for target in old_targets:
            if target.exists():
                shutil.rmtree(target)
        if state_dir.exists():
            # 只删除我们创建的状态和卸载入口，保留意外出现的其他文件。
            for name in ('state.json', 'uninstall.py'):
                (state_dir / name).unlink(missing_ok=True)
            if not any(state_dir.iterdir()):
                state_dir.rmdir()
        return

    payload = Path(payload).resolve()
    metadata = json.loads((payload / 'install.json').read_text(encoding='utf-8'))
    version = metadata.get('version', '')
    if metadata.get('id') != APP_ID or not re.fullmatch(r'\d+\.\d+\.\d+', version):
        raise ValueError('JS 载荷标识或版本不正确。')
    for name in ('main.js', 'ribbon.xml', 'index.html', 'js/ribbon.js'):
        if not (payload / name).is_file():
            raise ValueError('缺少加载项文件：' + name)
    if any(p.is_symlink() for p in payload.rglob('*')):
        raise ValueError('安装载荷中不能包含符号链接。')
    folder = APP_ID + '_' + version
    target = owned_directory(root, folder)
    ET.SubElement(tree.getroot(), 'jsplugin', name=APP_ID, type='wps', url=folder,
                  version=version, enable='enable_dev', install='null', customDomain='')
    staging = Path(tempfile.mkdtemp(prefix='.gw_mika-stage-', dir=root))
    backup = staging / 'previous'
    replaced = False
    try:
        shutil.copytree(payload, staging / 'new')
        if target.exists():
            target.rename(backup)
        (staging / 'new').rename(target)
        replaced = True
        state_dir.mkdir(exist_ok=True)
        shutil.copyfile(__file__, state_dir / 'uninstall.py')
        # 所有旧目录仍记录在状态中，即使清理因占用失败，下次仍能正确卸载。
        folders = sorted(set(state['folders'] + [folder]))
        atomic_write(state_file, json_bytes({'id': APP_ID, 'folders': folders}))
        atomic_write(config, ET.tostring(tree.getroot(), encoding='utf-8', xml_declaration=True))
    except Exception:
        if replaced and target.exists():
            shutil.rmtree(target)
        if backup.exists():
            backup.rename(target)
        if old_config is not None:
            atomic_write(config, old_config)
        if state_dir.exists():
            atomic_write(state_file, json_bytes(state))
        raise
    finally:
        shutil.rmtree(staging)
    for previous in old_targets:
        if previous != target and previous.exists():
            shutil.rmtree(previous)


def main():
    parser = argparse.ArgumentParser(description='公文准式 WPS JS 安装／卸载（当前用户）')
    parser.add_argument('--uninstall', action='store_true')
    parser.add_argument('--data-root', type=Path, default=default_root())
    parser.add_argument('--payload', type=Path, default=Path(__file__).parent / 'payload')
    args = parser.parse_args()
    if sys.platform != 'linux':
        parser.error('本安装入口用于 Linux；Windows 请使用 WPS 安装包。')
    if hasattr(os, 'geteuid') and os.geteuid() == 0:
        parser.error('请以使用 WPS 的普通用户运行，不要使用 sudo。')
    try:
        with locked(args.data_root):
            update(args.data_root, args.payload, args.uninstall)
    except Exception as error:
        print('操作失败：' + str(error), file=sys.stderr)
        return 1
    print('公文准式已' + ('卸载。' if args.uninstall else '安装。请完全退出并重新打开 WPS 文字。'))
    return 0


if __name__ == '__main__':
    sys.exit(main())
