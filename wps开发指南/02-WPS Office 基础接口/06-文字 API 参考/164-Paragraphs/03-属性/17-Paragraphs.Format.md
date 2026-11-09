# Paragraphs.Format

返回或设置一个 **ParagraphFormat** 对象，该对象代表指定的一个或多个段落的格式。



## 语法

express.**Format**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

ParagraphFormat

## 示例


```JavaScript
/*本示例将活动文档的所有段落靠左对齐。*/
function test() {
    ActiveDocument.Paragraphs.Format.Alignment = wdAlignParagraphLeft
}
```


```JavaScript
/*本示例为选定区域所有段落设置 30% 底纹。*/
function test() {
    Selection.Paragraphs.Format.Shading.Texture = wdTexture30Percent
}
```
