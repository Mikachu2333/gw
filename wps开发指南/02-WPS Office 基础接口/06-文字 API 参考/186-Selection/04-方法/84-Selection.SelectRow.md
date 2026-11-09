# Selection.SelectRow

选定插入点所在的行，或者选择选定内容所在行。



## 语法

express.**SelectRow()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


如果选定内容不在表格中，则会导致出错。



## 示例


```JavaScript
/*本示例将选定内容折叠至开始位置，然后选定插入点所在的行。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    if (Selection.Information(wdWithInTable)) {
        Selection.SelectRow()
    }
}
```


```JavaScript
/*本示例选定第一个窗口中包含插入点所在的行，并设置行的高度。*/
function test() {
    Windows.Item(1).Selection.SelectRow()
    Windows.Item(1).Selection.Rows.SetHeight(InchesToPoints(1), wdRowHeightExactly)
}
```
