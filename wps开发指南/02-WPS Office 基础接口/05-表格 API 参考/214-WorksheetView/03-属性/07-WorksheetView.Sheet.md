# WorksheetView.Sheet

返回指定 **WorksheetView** 对象的工作表对象。只读。



## 语法

express.**Sheet**

express   一个代表 **WorksheetView** 对象的变量。

## 类型

Object

## 示例


```JavaScript
/*本示例显示活动工作表视图所在的工作表名称。*/
function test() {
    let activeSheetView = ActiveWindow.ActiveSheetView
    MsgBox(`活动窗口的活动工作表视图所在的工作表为 ${activeSheetView.Sheet.Name}`)
}
```


```JavaScript
/*本示例更改第一个工作表视图所在的工作表名称。*/
function test() {
    let sheetView = ActiveWindow.SheetViews.Item(1)
    sheetView.Sheet.Name = "成绩表"
}
```
