# Envelope.AddressFromTop

返回或设置信封上边缘与收信人地址之间的距离（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**AddressFromTop**

express   一个代表 **Envelope** 对象的变量。

## 类型

number（float 精度）

## 说明


如果在将信封添加至文档前使用该属性，则产生错误。



## 示例


```JavaScript
/*本示例新建一篇文档，并将有预定义收信人地址和寄信人地址的信封添至文档中。然后将信封上边缘和收信人地址的之间的距离设置为 1.5 英寸，并将信封左边缘和收信人地址的距离设置为 1.75 英寸。*/
function test() {
    let address = "Michael Bunney\n123 Skye St.\nOur Town, WA 98004"
    let rtAddress = "Kate Dresen\n123 Main\nOther Town, WA 98004"
    let envelope = Documents.Add().Envelope
    envelope.Insert(null, address, null, null, rtAddress, null, null, null, "C4")
    envelope.AddressFromTop = Application.InchesToPoints(1.5)
    envelope.AddressFromLeft = Application.InchesToPoints(1.75)
    ActiveDocument.ActiveWindow.View.Type = wdPrintView
}
```


```JavaScript
/*本示例显示附加到第一个文档的信封上边缘与收信人地址之间的距离。*/
function test() {
    let envelope = Application.Documents.Item(1).Envelope
    alert(`信封上边缘与收信人地址之间的距离：${envelope.AddressFromTop} 磅`)
}
```
