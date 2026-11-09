# Selection.ClearParagraphDirectFormatting

从所选文本中删除通过功能区上的按钮或者对话框手动应用的段落格式。



## 语法

express.**ClearParagraphDirectFormatting()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


此方法不会删除使用段落样式应用的段落格式。要删除用户使用段落样式应用的段落格式，请使用 **[ClearParagraphStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearParagraphStyle)** 方法。要删除所有段落格式（包括样式和手动格式），请使用 **[ClearParagraphAllFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearParagraphAllFormatting)** 方法。

有关如何删除字符格式的详细信息，请参阅 **[ClearCharacterAllFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearCharacterAllFormatting)** 、 **[ClearCharacterDirectFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearCharacterDirectFormatting)** 或 **[ClearCharacterStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearCharacterStyle)** 方法。



## 示例


```JavaScript
/*本示例删除第一个文档中所有通过功能区上的按钮或者对话框手动应用的段落格式。*/
function test() {
    Documents.Item(1).Select()
    Selection.ClearParagraphDirectFormatting()
}
```


```JavaScript
/*本示例删除活动文档上第一段至第三段通过功能区上的按钮或者对话框手动应用的段落格式。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    let start = paragraphs.Item(1).Range.Start
    let end = paragraphs.Item(3).Range.End
    ActiveDocument.Range(start, end).Select()
    Selection.ClearParagraphDirectFormatting()
}
```
