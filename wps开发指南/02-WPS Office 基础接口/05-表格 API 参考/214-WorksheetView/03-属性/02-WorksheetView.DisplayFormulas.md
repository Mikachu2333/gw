# WorksheetView.DisplayFormulas

返回或设置在当前工作表视图中是显示还是隐藏公式。可读/写 **Boolean** 类型。



## 语法

express.**DisplayFormulas**

express   一个代表 **WorksheetView** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例激活工作表Sheet1，并显示活动工作表视图的公式。*/
function test() {
    Application.Workbooks.Item("工作簿1").Worksheets.Item("Sheet1").Activate()
    ActiveWindow.ActiveSheetView.DisplayFormulas = true
}
```


```JavaScript
/*本示例将第一个窗口的活动工作表视图DisplayFormulas 属性的值设置为false。*/
function test() {
    Windows.Item(1).ActiveSheetView.DisplayFormulas = false
}
```
