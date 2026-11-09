# DocumentField.PrintOut

返回或设置公文域对象是否可以打印。可读写， **Boolean** 类型。



## 语法

express.**PrintOut**

express   一个代表 **DocumentField** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示第一个文档上第二个公文域是否可以打印。*/
function test() {
    let documentField = Documents.Item(1).DocumentFields.Item(2)
    alert(documentField.PrintOut)
}
```


```JavaScript
/*本示例将所选内容中第一个公文域设置为不可打印。*/
function test() {
    let documentField = Selection.DocumentFields.Item(1)
    documentField.PrintOut = false
}
```
