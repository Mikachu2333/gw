# Selection.ClearCharacterDirectFormatting

取消所选文本的字符格式，即通过功能区上的按钮或对话框手动应用的格式。



## 语法

express.**ClearCharacterDirectFormatting()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


此方法不会删除通过字符样式应用的字符格式。要删除用户通过字符样式应用的字符格式，请使用 **[ClearCharacterStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearCharacterStyle)** 方法。要删除所有字符格式，无论这些格式是用户通过字符样式应用的，还是用户通过 WPS 中的格式设置功能手动应用的，都可以使用 **[ClearCharacterAllFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearCharacterAllFormatting)** 方法。

有关如何删除段落格式的详细信息，请参阅 **[ClearParagraphAllFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearParagraphAllFormatting)** 、 **[ClearParagraphDirectFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearParagraphDirectFormatting)** 或 **[ClearParagraphStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearParagraphStyle)** 方法。



## 示例


```JavaScript
/*本示例删除第一个文档中所有通过功能区的按钮或对话框手动应用的文本字符格式。*/
function test() {
    Documents.Item(1).Select()
    Selection.ClearCharacterDirectFormatting()
}
```


```JavaScript
/*本示例删除活动文档上第二段至第四段通过功能区的按钮或对话框手动应用的文本字符格式。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    let start = paragraphs.Item(2).Range.Start
    let end = paragraphs.Item(4).Range.End
    ActiveDocument.Range(start, end).Select()
    Selection.ClearCharacterDirectFormatting()
}
```
