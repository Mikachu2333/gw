# Cell.Select

选择指定的对象。



## 语法

express.**Select()**

express   一个代表 **Cell** 对象的变量。

## 返回值

void

## 说明


如果做出不适用于当前视图的选择，此代码将失败。例如，可以在幻灯片浏览视图中而不能在幻灯片视图中选择幻灯片。



## 示例


```JavaScript
/*本示例选择活动演示文稿的第一张幻灯片的第一个表格的第一个单元格。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let cell = shape.Table.Cell(1, 1)
    cell.Select()
}
```


```JavaScript
/*本示例选择第一个窗口所选表格的最后一个单元格。*/
function test() {
    let table = Windows.Item(1).Selection.ShapeRange.Table
    let cell = table.Cell(table.Rows.Count, table.Columns.Count)
    cell.Select()
}
```
