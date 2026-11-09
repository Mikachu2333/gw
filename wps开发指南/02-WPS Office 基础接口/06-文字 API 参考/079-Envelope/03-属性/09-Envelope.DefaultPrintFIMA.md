# Envelope.DefaultPrintFIMA

如果为 **True** ，则默认向信封添加“饰面标识标记”(FIM-A)。 **Boolean** 类型，可读写。



## 语法

express.**DefaultPrintFIMA**

express   一个代表 **Envelope** 对象的变量。

## 类型

boolean

## 说明


该属性只适用于美国邮件。FIM-A 代码用于分拣礼节性答复邮件。



## 示例


```JavaScript
/*本示例设置默认的信封设置，使包括饰面标识标记（FIM-A）。*/
function test() {
    let envelope = ActiveDocument.Envelope
    envelope.DefaultPrintFIMA = true
}
```


```JavaScript
/*本示例判断如果附加到第一个文档的信封包括饰面标识标记（FIM-A），则通知用户。*/
function test() {
    let envelope = Documents.Item(1).Envelope
    if (envelope.DefaultPrintFIMA) {
        alert("信封包括饰面标识标记（FIM-A）")
    }
}
```
