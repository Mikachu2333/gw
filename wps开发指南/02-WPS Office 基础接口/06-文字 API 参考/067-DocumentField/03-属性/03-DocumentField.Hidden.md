# DocumentField.Hidden

如果为 **True** ，则隐藏文档中的公文域。 **Boolean** 类型，可读写。



## 语法

express.**Hidden**

express   一个代表 **DocumentField** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示是否隐藏活动文档上第一个公文域。*/
function test() {
    let documentField = Application.ActiveDocument.DocumentFields.Item(1)
    alert(documentField.Hidden)
}
```


```JavaScript
/*本示例隐藏所选内容中第一个公文域。*/
function test() {
    let documentField = Selection.DocumentFields.Item(1)
    documentField.Hidden = true
}
```
