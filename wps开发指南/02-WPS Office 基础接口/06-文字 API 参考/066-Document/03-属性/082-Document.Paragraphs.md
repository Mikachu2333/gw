# Document.Paragraphs

返回一个 **[Paragraphs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/obj)** 集合，该集合代表指定文档中的所有段落。只读。



## 语法

express.**Paragraphs**

express   一个代表 **Document** 对象的变量。

## 类型

Paragraphs

## 示例


```JavaScript
/*本示例将活动文档的所有段落的行距设置为单倍行距。*/
function test() {
    ActiveDocument.Paragraphs.LineSpacingRule = wdLineSpaceSingle
}
```


```JavaScript
/*本示例为第一个文档新建一个段落，并设置新建段落的文本和加粗格式。*/
function test() {
    let paragraph = Documents.Item(1).Paragraphs.Add()
    paragraph.Range.Text = "example"
    paragraph.Range.Font.Bold = msoTrue
}
```
