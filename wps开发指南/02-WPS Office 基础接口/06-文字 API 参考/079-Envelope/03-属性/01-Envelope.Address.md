# Envelope.Address

以 **Range** 对象形式返回信件收件人地址。只读。



## 语法

express.**Address**

express   一个代表 **Envelope** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*如果已向活动文档添加信封，则本示例显示收信人地址；否则显示一条消息。*/
function test() {
    try {
        let address = ActiveDocument.Envelope.Address.Text
        MsgBox(address, null, "Delivery Address")
    } catch (error) {
        alert("Insert an envelope into the document")
    }
}
```


```JavaScript
/*本示例选中附加到第一个文档的信封的收信人的地址。*/
function test() {
    let range = Application.Documents.Item(1).Envelope.Address
    range.Select()
}
```
