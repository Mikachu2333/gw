# Envelope.DefaultOrientation

返回或设置信封的默认送纸方向。 **WdEnvelopeOrientation** 类型，可读写。



## 语法

express.**DefaultOrientation**

express   一个代表 **Envelope** 对象的变量。

## 类型

WdEnvelopeOrientation

## 示例


```JavaScript
/*本示例将送纸方式设置为正面向上、居中和纵向。*/
function test() {
    let envelope = ActiveDocument.Envelope
    envelope.DefaultFaceUp = true
    envelope.DefaultOrientation = wdCenterPortrait
    alert("Feed envelopes centered, face up, in portrait orientation")
}
```


```JavaScript
/*本示例显示附加到第一个文档的信封的送纸方向是否为wdCenterLandscape。*/
function test() {
    let envelope = Documents.Item(1).Envelope
    alert(envelope.DefaultOrientation == wdCenterLandscape)
}
```
