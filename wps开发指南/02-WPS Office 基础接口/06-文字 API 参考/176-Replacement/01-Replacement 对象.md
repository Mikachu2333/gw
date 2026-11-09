# Replacement 对象

代表查找和替换操作的替换条件。 **Replacement** 对象的属性和方法对应于 **“查找和替换”** 对话框中的选项。

## 说明


使用 **Replacement** 属性可返回一个 **Replacement** 对象。


## 示例


```JavaScript
/*本示例将下一处出现的单词“hi”替换为单词“hello”。*/
function test() {
    let find = Selection.Find
    find.Text = "hi"
    find.ClearFormatting()
    find.Replacement.Text = "hello"
    find.Replacement.ClearFormatting()
    find.Execute(null, null, null, null, null, null, true, null, null, null, wdReplaceOne)
}
```
要查找和替换格式，请将查找文字和替换文字均设置为空字符串（""），并将 **Execute** 方法的 *Format* 参数设置为 **True** 。



```JavaScript
/*本示例删除活动文档中的所有粗体格式。Find 对象的 Bold 属性为 True，Replacement 对象的 Bold 属性为 False。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.ClearFormatting()
    find.Font.Bold = true
    find.Text = ""
    find.Replacement.ClearFormatting()
    find.Replacement.Font.Bold = false
    find.Replacement.Text = ""
    find.Execute(null, null, null, null, null, null, null, null, true, null, wdReplaceAll)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ClearFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Replacement/member/ClearFormatting) | 清除在替换操作中指定的文本的文本格式和段落格式。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Replacement/member/Font) | 返回或设置 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/obj)** 对象，该对象代表指定对象的字符格式。 **Font** 类型，可读写。 |
| [Frame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Replacement/member/Frame) | 返回一个 **[Frame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/obj)** 对象，该对象代表格式设置为指定样式的或查找并替换操作所涉及的图文框。只读。 |
| [Highlight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Replacement/member/Highlight) | 如果将突出显示格式应用于替换文本，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。 |
| [LanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Replacement/member/LanguageID) | 返回或设置一个 **[WdLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdLanguageID)** 常量，该常量代表指定范围的语言。可读写。 |
| [ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Replacement/member/ParagraphFormat) | 返回或设置一个 **[ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ParagraphFormat/obj)** 对象，该对象代表指定替换操作的段落设置。可读/写。 |
| [Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Replacement/member/Style) | 返回或设置指定对象的样式。要设置该属性，请指定样式的本地名称、一个整数、一个 **[WdBuiltinStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdBuiltinStyle)** 常量或一个代表样式的对象。可读写 **Variant** 类型。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Replacement/member/Text) | 返回或设置要替换的文本。 **String** 类型，可读写。 |