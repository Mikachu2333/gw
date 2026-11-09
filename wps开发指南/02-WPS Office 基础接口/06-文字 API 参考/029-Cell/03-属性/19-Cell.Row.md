# Cell.Row

返回一个 **Row** 对象，该对象代表指定单元格所在的行。



## 语法

express.**Row**

express   一个代表 **Cell** 对象的变量。

## 类型

Row

## 示例


```JavaScript
/*本示例为表格中插入点所在的行应用底纹。*/
function test() {
    if (Application.Selection.Information(wdWithInTable)) {
        let cell = Application.Selection.Cells.Item(1)
        cell.Row.Cells.Shading.Texture = wdTexture10Percent
    } else {
        alert("The insertion point is not in a table.")
    }
}
```


```JavaScript
/*本示例将活动文档中第一张表格奇数行的单元格内边框设置为红色双线。*/
function test() {
    let cells = Application.ActiveDocument.Tables.Item(1).Columns.Item(1).Cells
    for (let i = 1; i <= cells.Count; i++) {
        if ((cells.Item(i).RowIndex) % 2 == 1) {
            cells.Item(i).Row.Borders.InsideLineStyle = wdLineStyleDouble
            cells.Item(i).Row.Borders.InsideColor = wdColorRed
        }
    }
}
```
