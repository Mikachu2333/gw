# WorksheetView.DisplayOutline

如果显示分级显示符号，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**DisplayOutline**

express   一个代表 **WorksheetView** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于工作表和宏工作表。



## 示例


```JavaScript
/*本示例激活工作表Sheet1，并隐藏第一个工作表视图的分级显示符号。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    ActiveWindow.SheetViews.Item(1).DisplayOutline = false
}
```


```JavaScript
/*本示例检查活动工作表视图是否显示分级显示符号。*/
function test() {
    let view = Application.ActiveWindow.ActiveSheetView
    if (view.DisplayOutline) {
        MsgBox("工作表视图显示分级显示符号")
    } else {
        MsgBox("工作表视图不显示分级显示符号")
    }
}
```
