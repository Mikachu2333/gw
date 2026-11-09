# DocumentField.Range

返回一个 **Range** 对象，该对象表示公文域的内容。



## 语法

express.**Range**

express   一个代表 **DocumentField** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例显示所选内容中第一个公文域的文本。*/
function test() {
    let documentField = Selection.DocumentFields.Item(1)
    alert(documentField.Range.Text)
}
```


```JavaScript
/*本示例将第一个文档上第三个公文域的内容设置为加粗。*/
function test() {
    let documentField = Documents.Item(1).DocumentFields.Item(3)
    documentField.Range.Bold = true
}
```
