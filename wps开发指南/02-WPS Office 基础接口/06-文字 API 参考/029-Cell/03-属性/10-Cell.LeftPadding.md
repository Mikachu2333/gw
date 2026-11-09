# Cell.LeftPadding

返回或设置在表格的单个单元格或所有单元格的内容左侧的间距（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**LeftPadding**

express   一个代表 **Cell** 对象的变量。

## 类型

number（float 精度）

## 说明


单个单元格的 **LeftPadding** 属性设置将覆盖整个表格的 **LeftPadding** 属性的设置。



## 示例


```JavaScript
/*本示例将活动文档中第一个表格的第一个单元格的左边距设为 40 像素。*/
function test() {
    Application.ActiveDocument.Tables.Item(1).Rows.Item(1).Cells.Item(1).LeftPadding = PixelsToPoints(40, false)
}
```


```JavaScript
/*本示例将活动文档中第一个表格的第二列的第三个单元格的左边距设为 20 磅，并在该单元格中填入左边距的值。*/
function test() {
    let cell = Application.ActiveDocument.Tables.Item(1).Columns.Item(2).Cells.Item(3)
    cell.LeftPadding = 20
    cell.Range.Text = cell.LeftPadding
}
```
