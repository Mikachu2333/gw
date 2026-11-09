# Paragraph.Format

返回或设置一个 **ParagraphFormat** 对象，该对象代表指定的一个或多个段落的格式。



## 语法

express.**Format**

express   一个代表 **Paragraph** 对象的变量。

## 类型

ParagraphFormat

## 示例


```JavaScript
/*本示例将活动文档中第一段的格式应用于文档的选定内容。*/
function test() {
    let paraFormat = ActiveDocument.Paragraphs.Item(1).Format.Duplicate
    Selection.Paragraphs.Format = paraFormat
}
```


```JavaScript
/*本示例为选定区域的第一个段落设置 30% 底纹。*/
function test() {
    Selection.Paragraphs.Item(1).Format.Shading.Texture = wdTexture30Percent
}
```
