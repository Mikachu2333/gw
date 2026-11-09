# Borders.Enable

返回或设置指定对象的边框格式。 **Long** 类型，可读写。



## 语法

express.**Enable**

express   一个代表 **Borders** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果指定对象的全部或部分边框应用了边框格式，则 **Enable** 属性返回 **True** 或 **wdUndefined** 。可将该属性值设置为 **True** 、 **False** 或 **WdLineStyle** 常量。

 **Enable** 属性应用于指定对象的所有边框。如果为 **True** ，则样式设置为默认样式，线条宽度设置为默认线条宽度。可以通过 **DefaultBorderLineWidth** 和 **DefaultBorderLineStyle** 属性来设置默认样式和默认线条宽度。

若要从对象中删除所有边框， 将 **Enable** 属性设置为 **False** 。

如果要删除或应用单一边框，可先用 **Borders** (*index*) （其中 **index** 为 **WdBorderType** 常量）返回单一边框，然后设置 **LineStyle** 属性。



## 示例


```JavaScript
/*本示例删除活动文档中第一个表格的所有边框。*/
function test() {
    Application.ActiveDocument.Tables.Item(1).Borders.Enable = false
}
```


```JavaScript
/*本示例删除第一张表格中第一个单元格的所有边框。*/
function test() {
    if (ActiveDocument.Tables.Count >= 1) {
        ActiveDocument.Tables.Item(1).Cell(1, 1).Borders.Enable = false
    }
}
```


```JavaScript
/*本示例为选定内容第一段四边设置虚框。*/
function test() {
    Options.DefaultBorderLineWidth = wdLineWidth025pt
    Options.DefaultBorderLineStyle = wdLineStyleDashLargeGap
    Selection.Paragraphs.Item(1).Borders.Enable = true
}
```


```JavaScript
/*本示例为选定内容的第一个字符设置边框。如果没有选定内容，则为插入点后的第一个字符设置边框。*/
function test() {
    Selection.Characters.Item(1).Borders.Enable = true
}
```
