# Selection.ClearParagraphAllFormatting

从所选文本中删除所有段落格式（包括通过段落样式应用的格式和手动应用的格式）。



## 语法

express.**ClearParagraphAllFormatting()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


此方法将删除所有段落格式。如果您需要删除通过段落样式应用的段落格式，请使用 **[ClearParagraphStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearParagraphStyle)** 方法。要删除用户使用 WPS 段落格式设置功能手动应用的段落格式，请使用 **[ClearParagraphDirectFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearParagraphDirectFormatting)** 方法。

要删除字符格式，请参阅 **[ClearCharacterAllFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearCharacterAllFormatting)** 、 **[ClearCharacterDirectFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearCharacterDirectFormatting)** 或 **[ClearCharacterStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearCharacterStyle)** 方法。



## 示例


```JavaScript
/*本示例删除活动文档中所有段落格式。*/
function test() {
    ActiveDocument.Select()
    Selection.ClearParagraphAllFormatting()
}
```


```JavaScript
/*本示例删除活动文档中第二段至第四段的段落格式。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    let start = paragraphs.Item(2).Range.Start
    let end = paragraphs.Item(4).Range.End
    ActiveDocument.Range(start, end).Select()
    Selection.ClearParagraphAllFormatting()
}
```
