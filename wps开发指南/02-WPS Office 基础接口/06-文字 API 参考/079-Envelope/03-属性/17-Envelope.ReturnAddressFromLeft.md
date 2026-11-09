# Envelope.ReturnAddressFromLeft

返回或设置信封左边缘和寄信人地址之间的距离（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**ReturnAddressFromLeft**

express   一个代表 **Envelope** 对象的变量。

## 类型

number（float 精度）

## 说明


如果在将信封添加至文档前使用该属性，则产生错误。



## 示例


```JavaScript
/*本示例新建一篇文档，并添加有预定义收信人地址和寄信人地址的一个信封。然后，该示例将信封的左边缘与寄信人地址之间的距离设置为 0.75 英寸。*/
function test() {
    let address = "Karin Gallagher\n123 Skye St.\nOur Town, WA 98004"
    let rtAddress = "Don Funk\n123 Main\nOther Town, WA 98040"
    let envelope = Documents.Add().Envelope
    envelope.Insert(null, address, null, null, rtAddress, null, null, null, "C4")
    envelope.ReturnAddressFromLeft = Application.InchesToPoints(0.75)
    ActiveDocument.ActiveWindow.View.Type = wdPrintView
}
```


```JavaScript
/*本示例显示附加到第一个文档的信封左边缘到寄信人地址之间的距离。*/
function test() {
    let envelope = Documents.Item(1).Envelope
    alert(`信封左边缘到寄信人地址之间的距离：${envelope.ReturnAddressFromLeft} 磅`)
}
```
