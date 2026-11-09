# DocumentField.Select

选择指定的域。



## 语法

express.**Select()**

express   一个代表 **DocumentField** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例选中第一个文档上第一个公文域。*/
function test() {
    let documentField = Documents.Item(1).DocumentFields.Item(1)
    documentField.Select()
}
```


```JavaScript
/*本示例判断如果所选内容中名为“example2”的公文域可以打印，则选中该公文域。*/
function test() {
    let documentField = Selection.DocumentFields.Item("example2")
    if (documentField.PrintOut) {
        documentField.Select()
    }
}
```
