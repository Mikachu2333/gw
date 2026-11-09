# Document.Final

返回或设置 **Boolean** 值，该值指示文档是否是最终的。可读/写。



## 语法

express.**Final**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 说明


 **True** 将文档标记为最终版本，以通知收件人（如果有）文档是最终的，并将文档设置为只读。



## 示例


```JavaScript
/*本示例将活动文档标记为最终版本*/
function test() {
    Application.ActiveDocument.Final = true
}
```


```JavaScript
/*本示例显示第一个文档是否为最终版本*/
function test() {
    alert(Application.Documents.Item(1).Final)
}
```
