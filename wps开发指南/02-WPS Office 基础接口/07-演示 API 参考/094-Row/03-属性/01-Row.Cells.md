# Row.Cells

返回 **[CellRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CellRange/obj)** 集合，它代表表格列或行中的单元格。只读。



## 语法

express.**Cells**

express   一个代表 **Row** 对象的变量。

## 类型

CellRange

## 示例


```JavaScript
/*本示例新建一个演示文稿，接着为其添加一张幻灯片，然后在幻灯片上插入一个 3x3 的表格，最后为表格中的每个单元格指定列号和行号。*/
function test() {
    let presentation = Presentations.Add()
    presentation.Slides.Add(1, ppLayoutBlank).Shapes.AddTable(3, 3)
    let table = presentation.Slides.Item(1).Shapes.Item(1).Table
    for (let i = 1; i <= table.Rows.Count; i++) {
        for (let j = 1; j <= table.Rows.Item(i).Cells.Count; j++) {
            table.Rows.Item(i).Cells.Item(j).Shape.TextFrame.TextRange.Text = `row. ${i}col ${j}`
        }
    }
}
```


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个表格的第一个单元格的底边线框设置为虚线样式。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let row = shape.Table.Rows.Item(1)
    row.Cells.Item(1).Borders.Item(ppBorderBottom).DashStyle = msoLineDash
}
```
