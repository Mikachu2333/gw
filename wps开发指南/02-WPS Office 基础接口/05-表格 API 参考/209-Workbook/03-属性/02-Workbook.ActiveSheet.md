# Workbook.ActiveSheet

返回一个对象，它代表活动工作簿中或指定的窗口或工作簿中的活动工作表（最上面的工作表）。如果没有活动的工作表，则返回 **null** 。



## 语法

express.**ActiveSheet**

express   一个代表 **Workbook** 对象的变量。

## 类型

Object

## 说明


如果不指定对象识别符，则此属性返回活动工作簿中的活动工作表。

如果某个工作簿出现在若干个窗口中，那么该工作簿的 **ActiveSheet** 属性在不同窗口中可能不同。



## 示例


```JavaScript
/*此示例显示活动工作表的名称。*/
function test() {
    alert("The name of the active sheet is " + Application.ActiveSheet.Name)
}
```


```JavaScript
/*此示例将活动工作表Sheet1的A1单元格的值设为1。*/
function test() {
    Application.ActiveSheet.Cells(1, 1).Value2 = 1
}
```
