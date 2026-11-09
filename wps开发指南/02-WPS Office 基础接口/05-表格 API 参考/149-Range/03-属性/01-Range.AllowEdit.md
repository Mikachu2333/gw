# Range.AllowEdit

返回一个 **Boolean** 值，它指明是否可以在受保护的工作表上编辑区域。



## 语法

express.**AllowEdit**

express   一个代表 **Range** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例通知用户是否可编辑受保护的工作表上的单元格 A1。*/
function test() {
    let wksOne = Application.ActiveSheet
    //Protect the worksheet
    wksOne.Protect()
    //Notify the user about editing cell A1.
    if (wksOne.Range("A1").AllowEdit) {
        MsgBox("Cell A1 can be edited.");
    } else {
        MsgBox("Cell A1 cannot be edited.");
    }
}
```


```JavaScript
/*本示例新增一个工作表，然后将第二张工作表设为保护工作表，显示它们的可编辑状态*/
function test() {
    Worksheets.Add()
    let ws1 = Worksheets.Item(1)
    let ws2 = Worksheets.Item(2)
    ws2.Protect()
    if (ws1.Cells.AllowEdit != ws2.Cells.AllowEdit) {
        alert("当前两个工作表只有一个允许编辑")
    }
}
```
