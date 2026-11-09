# Shading.BackgroundPatternColor

返回或设置应用于 **Shading** 对象背景色的 24 位颜色。可读写。



## 语法

express.**BackgroundPatternColor**

express   一个代表 **Shading** 对象的变量。

## 类型

WdColor

## 说明


可以是任何有效的 **WdColor** 常量或 **RGB** 函数返回的值。



## 示例


```JavaScript
/*本示例将青绿色背景底纹应用于活动文档中的第一段。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    range.Shading.BackgroundPatternColor = wdColorTurquoise
}
```


```JavaScript
/*本示例在插入点添加一个表格，并且将浅灰色背景底纹应用于该表格的第一个单元格。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    let table = ActiveDocument.Tables.Add(Selection.Range, 2, 2)
    table.Cell(1, 1).Shading.BackgroundPatternColor = wdColorGray25
}
```
