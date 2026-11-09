# Selection.Active

如果指定窗口或窗格中的选定内容处于活动状态，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**Active**

express   一个代表 **Selection** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动窗口拆分为两个窗格，如果第一个窗格中的选定内容不处于活动状态，则激活该内容。*/
function test() {
    let activeWindow = ActiveDocument.ActiveWindow
    activeWindow.Split = true
    let pane = activeWindow.Panes.Item(1)
    if (!pane.Selection.Active) {
        pane.Activate()
    }
}
```


```JavaScript
/*本示例显示活动窗口上第一个窗格选定内容是否处于活动状态。*/
function test() {
    alert(ActiveWindow.Panes.Item(1).Selection.Active)
}
```
