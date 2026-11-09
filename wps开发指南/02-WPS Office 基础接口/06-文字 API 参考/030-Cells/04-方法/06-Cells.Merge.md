# Cells.Merge

将指定的多个表格单元格相互合并。合并后的结果是一个表格单元格。



## 语法

express.**Merge()**

express   一个代表 **Cells** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将所选内容第一行中的多个单元格合并为一个单元格，然后为该行应用底纹。*/
function test() {
    if (Application.Selection.Information(wdWithInTable)) {
        let firstrow = Application.Selection.Rows.Item(1)
        firstrow.Cells.Merge()
        firstrow.Shading.Texture = wdTexture10Percent
    }
}
```


```JavaScript
/*本示例将活动文档中第一个表格的第二列的单元格合并为一个单元格。*/
function test() {
    let cells = Application.ActiveDocument.Tables.Item(1).Columns.Item(2).Cells
    cells.Merge()
}
```
