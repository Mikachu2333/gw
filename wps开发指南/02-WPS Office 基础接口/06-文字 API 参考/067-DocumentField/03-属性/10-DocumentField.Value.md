# DocumentField.Value

返回一个字符串，该字符串为此公文域中的内容。 **String** 类型，可读/写。



## 语法

express.**Value**

express   一个代表 **DocumentField** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示第一个文档上第三个公文域的内容。*/
function test() {
    let documentField = Documents.Item(1).DocumentFields.Item(3)
    alert(documentField.Value)
}
```


```JavaScript
/*本示例设置所选内容中第一个公文域的内容。*/
function test() {
    let documentField = Selection.DocumentFields.Item(1)
    documentField.Value = "example"
}
```
