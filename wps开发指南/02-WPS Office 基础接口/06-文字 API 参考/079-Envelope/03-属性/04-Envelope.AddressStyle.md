# Envelope.AddressStyle

返回一个 **[Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Style/obj)** 对象，该对象代表信封的收信人地址样式。只读。



## 语法

express.**AddressStyle**

express   一个代表 **Envelope** 对象的变量。

## 类型

Style

## 说明


如果给文档添加了一个信封，则格式设置为“收信人地址”样式的文本将自动更新。



## 示例


```JavaScript
/*本示例修改附加到活动文档的信封中与“收信人地址”样式相关的字体格式。*/
function test() {
    let font = ActiveDocument.Envelope.AddressStyle.Font
    font.Bold = false
    font.Name = "Times New Roman"
    font.Size = 16
}
```


```JavaScript
/*本示例显示附加到第一个文档的信封中收信人地址的样式的类型是否为wdStyleTypeParagraph。*/
function test() {
    let style = Documents.Item(1).Envelope.AddressStyle
    alert(style.Type == wdStyleTypeParagraph)
}
```
