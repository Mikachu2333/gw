# ParagraphFormat.Duplicate

返回一个只读 **ParagraphFormat** 对象，该对象代表指定段落的段落格式。



## 语法

express.**Duplicate**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

ParagraphFormat

## 说明


可以使用 **Duplicate** 属性来获取重复的 **ParagraphFormat** 对象所有属性的设置。可将 **Duplicate** 属性返回的对象赋给另一个相同类型的对象，从而一次应用该对象的所有设置。在将重复对象赋给另一个对象之前，可更改重复对象的任何属性，而不会影响源对象。



## 示例


```JavaScript
/*本示例复制活动文档第一段的段落格式，并将该格式保存在 paragraphFormat 变量中，然后将 paragraphFormat 的左缩进量改为 1 英寸。再创建一篇新文档，插入文本，将 paragraphFormat 中保存的段落格式应用于该文本。*/
function test() {
    ActiveDocument.Range(0, 0).InsertAfter("Paragraph Number 1")
    let paragraphFormat = ActiveDocument.Paragraphs.Item(1).Format.Duplicate
    paragraphFormat.LeftIndent = InchesToPoints(1)
    Documents.Add()
    Selection.InsertAfter("This is a new paragraph.")
    Selection.Paragraphs.Format = paragraphFormat
}
```


```JavaScript
/*本示例将活动文档中第一段的格式应用于文档的选定内容。*/
function test() {
    let paragraphFormat = ActiveDocument.Paragraphs.Item(1).Format.Duplicate
    Selection.ParagraphFormat = paragraphFormat
}
```
