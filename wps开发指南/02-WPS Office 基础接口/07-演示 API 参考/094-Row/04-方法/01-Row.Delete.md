# Row.Delete

删除指定的 **Row** 对象。



## 语法

express.**Delete()**

express   一个代表 **Row** 对象的变量。

## 返回值

void

## 说明


如果试图删除表格中唯一一个现有行，将导致运行时错误。



## 示例


```JavaScript
/*本示例删除活动演示文稿的第一张幻灯片的第一个表格第一行。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let row = shape.Table.Rows.Item(1)
    row.Delete()
}
```


```JavaScript
/*本示例删除活动窗口所选表格的最后一行。*/
function test() {
    let table = ActiveWindow.Selection.ShapeRange.Table
    let row = table.Rows.Item(table.Rows.Count)
    row.Delete()
}
```
