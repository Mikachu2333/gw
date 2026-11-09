# Column.Delete

删除指定的 **Column** 对象。



## 语法

express.**Delete()**

express   一个代表 **Column** 对象的变量。

## 返回值

void

## 说明


如果试图删除表格中唯一一个现有列，将导致运行时错误。



## 示例


```JavaScript
/*本示例删除活动窗口所选表格的最后一列。*/
function test() {
    let table = ActiveWindow.Selection.ShapeRange.Table
    let column = table.Columns.Item(table.Columns.Count)
    column.Delete()
}
```


```JavaScript
/*本示例删除活动演示文稿的第一张幻灯片的第一个表格第一列。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let column = shape.Table.Columns.Item(1)
    column.Delete()
}
```
