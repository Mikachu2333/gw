# Selection.SelectColumn

选定包含插入点的列，或者选定包含选定内容的所有列。



## 语法

express.**SelectColumn()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


如果选定内容不在表格中，则会导致出错。



## 示例


```JavaScript
/*本示例将选定内容折叠为位于结尾处的插入点，然后选定插入点所在的列。*/
function test() {
    Selection.Collapse(wdCollapseEnd)
    if (Selection.Information(wdWithInTable)) {
        Selection.SelectColumn()
    }
}
```


```JavaScript
/*本示例选定活动窗口包含插入点的列，并设置列的宽度。*/
function test() {
    let selection = ActiveWindow.Selection
    selection.SelectColumn()
    selection.Columns.SetWidth(InchesToPoints(1), wdAdjustProportional)
}
```
