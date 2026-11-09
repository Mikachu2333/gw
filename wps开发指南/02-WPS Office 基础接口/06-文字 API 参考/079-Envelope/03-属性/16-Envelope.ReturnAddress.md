# Envelope.ReturnAddress

返回一个 **Range** 对象，该对象代表寄信人地址。



## 语法

express.**ReturnAddress**

express   一个代表 **Envelope** 对象的变量。

## 类型

Range

## 说明


如果在将信封添加到文档之前使用该属性，则会发生错误。



## 示例


```JavaScript
/*如果已经将信封添加到活动文档，则本示例显示寄信人地址；否则，显示一个消息框。*/
function test() {
    try {
        let address = ActiveDocument.Envelope.ReturnAddress.Text
        MsgBox(address, null, "Return Address")
    } catch (error) {
        alert("The active document doesn't include an envelope")
    }
}
```


```JavaScript
/*本示例选中附加到第一个文档的信封中寄信人地址。*/
function test() {
    let envelope = Documents.Item(1).Envelope
    envelope.ReturnAddress.Select()
}
```
