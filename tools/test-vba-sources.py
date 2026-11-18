"""检查 Word AddFromFile 所需的字节格式和 VBA 过程边界。"""
from pathlib import Path
import re
import unittest


class VbaSources(unittest.TestCase):
    def test_packaged_modules(self):
        scripts = sorted((Path(__file__).resolve().parents[1] / 'VBA Script').glob('*.vba'))
        self.assertGreater(len(scripts), 0)
        declaration = re.compile(r'^\s*(?:(?:Public|Private|Static)\s+)?(Sub|Function)\s+\w+', re.I)
        terminator = re.compile(r'^\s*End\s+(Sub|Function)\b', re.I)
        for script in scripts:
            with self.subTest(script=script.name):
                raw = script.read_bytes()
                text = raw.decode('cp936')
                self.assertEqual(raw, text.encode('cp936'))
                self.assertNotRegex(text, r'(?<!\r)\n|\r(?!\n)|\x00')
                active = None
                first = None
                for line in text.split('\r\n'):
                    start, end = declaration.match(line), terminator.match(line)
                    if start:
                        self.assertIsNone(active, line)
                        active = start[1].lower()
                        first = first or active
                    if end:
                        self.assertEqual(active, end[1].lower(), line)
                        active = None
                self.assertIsNone(active, '过程缺少结束语句')
                self.assertEqual('sub', first)


if __name__ == '__main__':
    unittest.main()
