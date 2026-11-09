# Window.ActiveSheet

返回一个对象，它代表活动工作簿中或指定的窗口或工作簿中的活动工作表（最上面的工作表）。如果没有活动的工作表，则返回 **null** 。



## 语法

express.**ActiveSheet**

express   一个代表 **Window** 对象的变量。

## 类型

Object

## 说明


如果不指定对象识别符，则此属性返回活动工作簿中的活动工作表。

如果某个工作簿出现在若干个窗口中，那么该工作簿的 **ActiveSheet** 属性在不同窗口中可能不同。



## 示例


```JavaScript
/*此示例显示活动工作表的名称。*/
function test() {
    MsgBox("The name of the active sheet is " + ActiveSheet.Name)
}
```


```JavaScript
/*本示例显示第一个窗口的活动工作表名称，并将第一个窗口的活动工作表名称设置为Sheet2。*/
function test() {
    alert(`第一个窗口的工作表名称为${Windows.Item(1).ActiveSheet.Name}，弹框关闭后则设置为Sheet2`)
    Windows.Item(1).ActiveSheet.Name = "Sheet2"
}
```
