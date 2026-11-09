# Document.LockQuickStyleSet

返回或设置一个 **Boolean** 类型的值，它代表用户是否可以更改使用的快速样式集。可读写。



## 语法

express.**LockQuickStyleSet**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置用户可以更改活动文档中使用的快速样式集。*/
function test() {
    ActiveDocument.LockQuickStyleSet = false
}
```


```JavaScript
/*本示例显示用户是否可以更改第一个文档中使用的快速样式集。*/
function test() {
    alert(!Documents.Item(1).LockQuickStyleSet)
}
```
