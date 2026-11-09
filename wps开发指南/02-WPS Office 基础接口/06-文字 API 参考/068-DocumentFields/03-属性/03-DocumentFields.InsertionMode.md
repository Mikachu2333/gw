# DocumentFields.InsertionMode

如果在公文域首尾位置进行插入，则为 **True** 。可读写， **Boolean** 类型。



## 语法

express.**InsertionMode**

express   一个代表 **DocumentFields** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动文档的公文域的插入方式是否在首尾位置。*/
function test() {
    alert(ActiveDocument.DocumentFields.InsertionMode)
}
```


```JavaScript
/*本示例将第一个文档的公文域设置为不在首尾进行插入*/
function test() {
    Documents.Item(1).DocumentFields.InsertionMode = false
}
```
