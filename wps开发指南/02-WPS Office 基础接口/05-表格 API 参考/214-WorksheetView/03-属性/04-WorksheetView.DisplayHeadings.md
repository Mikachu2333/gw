# WorksheetView.DisplayHeadings

如果同时显示行标题和列标题，则为 **True** ；如果未显示标题，则为 **False** 。可读/写 **Boolean** 类型。



## 语法

express.**DisplayHeadings**

express   一个代表 **WorksheetView** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于工作表和宏工作表。

此属性仅影响显示的标题。使用 **PrintHeadings** 属性可以控制标题的打印。



## 示例


```JavaScript
/*本示例检查工作表视图是否显示行和列标题。*/
function test() {
    let view = Application.ActiveWindow.ActiveSheetView
    if (view.DisplayHeadings) {
        MsgBox("工作表视图显示行和列标题")
    } else {
        MsgBox("工作表视图不显示行和列标题")
    }
}
```


```JavaScript
/*本示例激活工作表Sheet1，并隐藏第一个工作表视图的标题。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    ActiveWindow.SheetViews.Item(1).DisplayHeadings = false
}
```
