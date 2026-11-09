# Envelope.ReturnAddressStyle

返回一个 **[Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/obj)** 对象，该对象代表信封的寄信人地址样式。



## 语法

express.**ReturnAddressStyle**

express   一个代表 **Envelope** 对象的变量。

## 类型

Style

## 说明


如果为文档添加了一个信封，格式为“寄信人地址”样式的文字将自动更新。



## 示例


```JavaScript
/*本示例显示寄信人地址的样式名称和说明。*/
function test() {
    let style = ActiveDocument.Envelope.ReturnAddressStyle
    MsgBox(style.Description, null, style.NameLocal)
}
```


```JavaScript
/*本示例设置寄信人地址样式的行间距和预留空格格式。*/
function test() {
    let format = ActiveDocument.Envelope.ReturnAddressStyle.ParagraphFormat
    format.LineSpacingRule = wdLineSpaceExactly
    format.LineSpacing = 13
    format.SpaceAfter = 6
}
```
