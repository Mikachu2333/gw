# Column.Width

返回或设置指定对象的宽度（以磅为单位）。可读/写。



## 语法

express.**Width**

express   一个代表 **Column** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个表格第一列的宽度设置为 80 磅。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let column = shape.Table.Columns.Item(1)
    column.Width = 80
}
```


```JavaScript
/*本示例显示第一个窗口所选表格的最后一列的宽度。*/
function test() {
    let table = Windows.Item(1).Selection.ShapeRange.Table
    let column = table.Columns.Item(table.Columns.Count)
    alert(column.Width + " 磅")
}
```
