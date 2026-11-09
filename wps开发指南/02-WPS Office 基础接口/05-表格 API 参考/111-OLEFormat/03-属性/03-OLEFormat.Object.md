# OLEFormat.Object

返回与此 OLE 对象相联系的 OLE 自动化对象。 **Object** 型，只读。



## 语法

express.**Object**

express   一个代表 **OLEFormat** 对象的变量。

## 类型

Object

## 示例


```JavaScript
/*此示例显示活动工作表中第一个 OLE 对象的名称。*/
function test() {
    alert(ActiveSheet.Shapes.Item(1).OLEFormat.Object.Name)
}
```


```JavaScript
/*此示例将第一张工作表中第二个 OLE 对象隐藏。*/
function test() {
    Worksheets.Item(1).Shapes.Item(2).OLEFormat.Object.Visible = false
}
```
