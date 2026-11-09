# Document.Envelope

返回一个 **[Envelope](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Envelope/obj)** 对象，该对象代表文档中的信封和信封功能。只读。



## 语法

express.**Envelope**

express   一个代表 **Document** 对象的变量。

## 类型

Envelope

## 示例


```JavaScript
/*本示例将默认信封尺寸设为 C4（229 x 324 毫米）。*/
function test() {
    ActiveDocument.Envelope.DefaultSize = "C4"
}
```


```JavaScript
/*如果文档中添加了一个信封，则本示例显示收信人地址，否则显示一个消息框。*/
function test() {
    try {
        let address = ActiveDocument.Envelope.Address.Text
        MsgBox(address, null, "Delivery Address")
    } catch (exception) {
        MsgBox("Add an envelope to the document")
    }
}
```


```JavaScript
/*此示例创建一个新文档，并添加具有预定义递送地址和寄信地址的信封。*/
function test() {
    let address = "Don Funk\n123 Skye St.\nOur Town, WA 98040"
    let rtAddress = "Karin Gallagher\n123 Main\nOther Town, WA 98004"
    Documents.Add().Envelope.Insert(null, address, null, null, rtAddress, null, null, null, "C4")
    ActiveDocument.ActiveWindow.View.Type = wdPrintView
}
```
