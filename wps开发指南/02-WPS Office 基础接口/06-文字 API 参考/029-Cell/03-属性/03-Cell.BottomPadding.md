# Cell.BottomPadding

返回或设置在表格中单独的单元格或所有单元格内容的下方添加的间距（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**BottomPadding**

express   一个代表 **Cell** 对象的变量。

## 类型

number（float 精度）

## 说明


单个单元格的 **BottomPadding** 属性的设置值会覆盖整个表格的 **BottomPadding** 属性的设置值。



## 示例


```JavaScript
/*本示例将活动文档中第一个表格的第一个单元格的底边距设为 40 像素。*/
function test() {
    Application.ActiveDocument.Tables.Item(1).Rows.Item(1).Cells.Item(1).BottomPadding = PixelsToPoints(40, false)
}
```


```JavaScript
/*本示例将活动文档中第一个表格的第一个单元格的底边距设为 20 磅，并在表格中填入底边距的值。*/
function test() {
    let cell = Application.ActiveDocument.Tables.Item(1).Rows.Item(1).Cells.Item(1)
    cell.BottomPadding = 20
    cell.Range.Text = cell.BottomPadding
}
```
