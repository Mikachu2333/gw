# Window.SplitRow

返回或设置将指定窗口拆分成窗格处的行号（拆分线以上的行数）。 **Long** 类型，可读写。



## 语法

express.**SplitRow**

express   一个代表 **Window** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例拆分活动窗口，并使拆分线以上有10行。*/
function test() {
    Application.Workbooks.Item("BOOK1.XLS").Worksheets.Item("Sheet1").Activate()
    ActiveWindow.SplitRow = 10
}
```


```JavaScript
/*本示例显示第一个窗口现在的拆分线以上的行数，再将第一个窗口拆分线以上的行数设置为5。*/
function test() {
    alert(`第一个窗口的拆分线以上有${Windows.Item(1).SplitRow}行，弹框关闭后则设置为5行`)
    Windows.Item(1).SplitRow = 5
}
```
