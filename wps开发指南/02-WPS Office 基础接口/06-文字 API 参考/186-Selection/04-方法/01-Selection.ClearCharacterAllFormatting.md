# Selection.ClearCharacterAllFormatting

从所选文本中删除所有字符格式（包括通过字符样式应用的格式和手动应用的格式）。



## 语法

express.**ClearCharacterAllFormatting()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


此方法会删除所有字符格式。如果您需要删除通过字符样式应用的格式，请使用 **[ClearCharacterStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearCharacterStyle)** 方法。要删除用户使用 WPS 字符格式设置功能手动应用的字符格式，请使用 **[ClearCharacterDirectFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearCharacterDirectFormatting)** 方法。

要取消段落格式，请参阅 **[ClearParagraphAllFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearParagraphAllFormatting)** 、 **[ClearParagraphDirectFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearParagraphDirectFormatting)** 或 **[ClearParagraphStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearParagraphStyle)** 方法。



## 示例


```JavaScript
/*本示例删除第一个文档中的所有字符格式。*/
function test() {
    Documents.Item(1).Select()
    Selection.ClearCharacterAllFormatting()
}
```


```JavaScript
/*本示例删除活动文档上第二段至第四段的所有字符格式。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    let start = paragraphs.Item(2).Range.Start
    let end = paragraphs.Item(4).Range.End
    ActiveDocument.Range(start, end).Select()
    Selection.ClearCharacterAllFormatting()
}
```
