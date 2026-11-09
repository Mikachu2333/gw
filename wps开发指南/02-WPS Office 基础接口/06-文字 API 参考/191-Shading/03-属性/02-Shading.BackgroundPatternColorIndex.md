# Shading.BackgroundPatternColorIndex

返回或设置应用于 **Shading** 对象的背景色。 **WdColorIndex** 类型，可读写。



## 语法

express.**BackgroundPatternColorIndex**

express   一个代表 **Shading** 对象的变量。

## 类型

WdColorIndex

## 示例


```JavaScript
/*本示例将青绿色背景底纹应用于活动文档中的第一段。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    range.Shading.BackgroundPatternColorIndex = wdTurquoise
}
```


```JavaScript
/*本示例在插入点添加一个表格，并且将浅灰色背景底纹应用于该表格的第一个单元格。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    let table = ActiveDocument.Tables.Add(Selection.Range, 2, 2)
    table.Cell(1, 1).Shading.BackgroundPatternColorIndex = wdGray25
}
```
