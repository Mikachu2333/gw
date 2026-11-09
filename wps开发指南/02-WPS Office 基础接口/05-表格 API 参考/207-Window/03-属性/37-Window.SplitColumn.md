# Window.SplitColumn

返回或设置将指定窗口拆分成窗格处的列号（拆分线左侧的列数）。 **Long** 类型，可读写。



## 语法

express.**SplitColumn**

express   一个代表 **Window** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例对指定窗口进行拆分，拆分线左侧保留2列。*/
function test() {
    Application.Workbooks.Item("BOOK1.XLS").Worksheets.Item("Sheet1").Activate()
    ActiveWindow.SplitColumn = 2
}
```


```JavaScript
/*本示例显示拆分线左侧现在保留的列数，再将左侧留有的列宽设置为10。*/
function test() {
    alert(`拆分线左侧现在保留${Windows.Item(1).ScrollRow}列，弹框关闭后则设置为10列`)
    Windows.Item(1).SplitColumn = 10
}
```
