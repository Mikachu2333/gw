# DocumentField.ReadOnly

如果为 **True** ，代表该公文域值只读。 **Boolean** 类型，可读/写。



## 语法

express.**ReadOnly**

express   一个代表 **DocumentField** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示第一个文档上第二个公文域值是否只读。*/
function test() {
    let documentField = Documents.Item(1).DocumentFields.Item(2)
    alert(documentField.ReadOnly)
}
```


```JavaScript
/*本示例将所选内容中第一个公文域值设置为只读。*/
function test() {
    let documentField = Selection.DocumentFields.Item(1)
    documentField.ReadOnly = true
}
```
