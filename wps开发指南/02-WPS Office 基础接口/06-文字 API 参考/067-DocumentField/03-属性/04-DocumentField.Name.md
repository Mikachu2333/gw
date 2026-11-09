# DocumentField.Name

返回或设置指定对象的名称。可读/写 **String** 类型。



## 语法

express.**Name**

express   一个代表 **DocumentField** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档上第一个公文域的名称。*/
function test() {
    let documentField = Application.ActiveDocument.DocumentFields.Item(1)
    alert(documentField.Name)
}
```


```JavaScript
/*本示例设置所选内容中第一个公文域的名称。*/
function test() {
    let documentField = Selection.DocumentFields.Item(1)
    documentField.Name = "example"
}
```
