# Envelope.DefaultOmitReturnAddress

如果默认省略信封上的寄信人地址，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DefaultOmitReturnAddress**

express   一个代表 **Envelope** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例默认省略新信封的寄信人地址。*/
function test() {
    ActiveDocument.Envelope.DefaultOmitReturnAddress = true
}
```


```JavaScript
/*本示例判断附加到活动文档的信封是否省略寄信人的地址，并通知用户。*/
function test() {
    if (ActiveDocument.Envelope.DefaultOmitReturnAddress) {
        alert("A return address is not included by default.")
    } else {
        alert("A return address is included by default.")
    }
}
```
