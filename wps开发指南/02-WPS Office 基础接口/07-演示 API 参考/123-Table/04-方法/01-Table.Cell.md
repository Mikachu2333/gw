# Table.Cell

返回一个 Cell 对象，该对象代表表格中的一个单元格。



## 语法

express.**Cell(Row, Column)**

express   一个代表 **Table** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Row | 必选 | number（int 精度） | 要返回的表格行数。可以是介于 1 和表格行数之间的任意整数。 |
| Column | 必选 | number（int 精度） | 要返回的表格列数。可以是介于 1 和表格列数之间的任意整数。 |

## 返回值

Cell

## 示例


```JavaScript
/*本示例在新演示文稿的新幻灯片上创建一个 3x3 的表格，并向表格的第一个单元格中插入文本。*/
function test() {
    let newPresentation = Presentations.Add()
    let newSlide = newPresentation.Slides.AddSlide(1, Presentations.Item(1).Slides.Item(1).CustomLayout)
    newSlide.Shapes.AddTable(3, 3).Select()
    newSlide.Shapes.Item(3).Table.Cell(1, 1).Shape.TextFrame.TextRange.Text = "Cell 1"
}
```


```JavaScript
/*本示例将活动演示文稿上第二张幻灯片中第五个形状中的表格第二行第一列单元格的下边框粗细设置为 10 磅*/
function test() {
    let shape = ActivePresentation.Slides.Item(2).Shapes.Item(5)
    shape.Table.Cell(2, 1).Borders(ppBorderBottom).Weight = 10
}
```
