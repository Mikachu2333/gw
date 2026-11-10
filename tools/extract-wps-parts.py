"""将原版 DOTX 的五个文档部件提取为无宏 DOCX，保留原始格式与 XML 命名空间。"""
from pathlib import Path
from xml.dom import minidom
from zipfile import ZipFile, ZipInfo, ZIP_DEFLATED

ROOT = Path(__file__).resolve().parents[1]
W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
PARTS = {'版头:单行发文机关': 'head-single', '版头:联合发文机关': 'head-multi',
         '版头:函线(上沿)': 'line-top', '版头:函线(下沿)': 'line-bottom', '装订线': 'binding-line'}


def extract():
    output = ROOT / 'wps-js' / 'templates'
    output.mkdir(exist_ok=True)
    with ZipFile(ROOT / 'src' / 'Resources' / '公文部件.dotx') as source:
        glossary = minidom.parseString(source.read('word/glossary/document.xml'))
        entries = glossary.getElementsByTagNameNS(W, 'docPart')
        found = set()
        for part in entries:
            name = part.getElementsByTagNameNS(W, 'name')[0].getAttributeNS(W, 'val')
            if name not in PARTS:
                continue
            found.add(name)
            document = minidom.Document()
            root = document.createElementNS(W, 'w:document')
            for key, value in glossary.documentElement.attributes.items():
                root.setAttribute(key, value)
            document.appendChild(root)
            body = document.createElementNS(W, 'w:body')
            root.appendChild(body)
            for child in part.getElementsByTagNameNS(W, 'docPartBody')[0].childNodes:
                body.appendChild(document.importNode(child, True))
            files = {'word/document.xml': document.toxml(encoding='UTF-8')}
            files['_rels/.rels'] = b'''<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>'''
            files['word/_rels/document.xml.rels'] = source.read('word/glossary/_rels/document.xml.rels')
            content_types = ['<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>']
            for item in ['styles', 'settings', 'webSettings', 'fontTable']:
                files['word/' + item + '.xml'] = source.read('word/glossary/' + item + '.xml')
                content_types.append('<Override PartName="/word/' + item + '.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.' + item + '+xml"/>')
            files['[Content_Types].xml'] = (''.join(content_types) + '</Types>').encode('utf-8')
            with ZipFile(output / (PARTS[name] + '.docx'), 'w', ZIP_DEFLATED) as target:
                for filename, data in files.items():
                    info = ZipInfo(filename, date_time=(2020, 1, 1, 0, 0, 0))
                    info.compress_type = ZIP_DEFLATED
                    target.writestr(info, data)
        if found != set(PARTS):
            raise RuntimeError('模板缺少部件：' + str(set(PARTS) - found))
    print('Extracted 5 WPS document parts from the original DOTX.')


if __name__ == '__main__':
    extract()
