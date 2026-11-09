# View.ShowTabs

如果显示制表符，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowTabs**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在第一个窗口中显示制表符，并在所选内容之前插入一个制表符。*/
function test() {
    let window = Windows.Item(1)
    window.Activate()
    window.View.ShowTabs = true
    Selection.InsertBefore("\t")
    Selection.Collapse(wdCollapseEnd)
}
```


```JavaScript
/*本示例拆分活动窗口，显示第一个窗格中的制表符，隐藏第二个窗格中的制表符。*/
function test() {
    let window = ActiveDocument.ActiveWindow
    window.Split = true
    window.Panes.Item(1).View.ShowTabs = true
    window.Panes.Item(2).View.ShowTabs = false
}
```
