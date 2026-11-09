# Envelope.DefaultFaceUp

如果按默认值将送纸方式设置为正面向上，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DefaultFaceUp**

express   一个代表 **Envelope** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例按默认值将送纸方式和送纸信封方向分别设置为正面向上和居中纵向。*/
function test() {
    let envelope = ActiveDocument.Envelope
    envelope.DefaultFaceUp = true
    envelope.DefaultOrientation = wdCenterPortrait
}
```


```JavaScript
/*本示例显示附加到活动文档的信封打印送纸方式。*/
function test() {
    if (ActiveDocument.Envelope.DefaultFaceUp) {
        alert("Feed envelopes face up.")
    } else {
        alert("Feed envelopes face down.")
    }
}
```
