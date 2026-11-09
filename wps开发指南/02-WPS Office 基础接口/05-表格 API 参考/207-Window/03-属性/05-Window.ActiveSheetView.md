# Window.ActiveSheetView

 返回一个对象，该对象代表指定窗口中活动工作表的视图。只读。



## 语法

express.**ActiveSheetView**

express   一个代表 **Window** 对象的变量。

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
/*本示例将第一个窗口的活动工作表视图的公式隐藏。*/
function test() {
    Windows.Item(1).ActiveSheetView.DisplayFormulas = false
}
```
