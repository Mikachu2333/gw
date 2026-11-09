# Cell.Split

将一个表单元格拆分为多个单元格。



## 语法

express.**Split(NumRows, NumColumns)**

express   一个代表 **Cell** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NumRows | 必选 | number（int 精度） | 该单元格要拆分成的行数。 |
| NumColumns | 必选 | number（int 精度） | 该单元格要拆分成的列数。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个表格的第一个单元格拆分成上下相邻的两个单元格。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let cell = shape.Table.Cell(1, 1)
    cell.Split(2, 1)
}
```


```JavaScript
/*本示例将第一个窗口所选表格的最后一个单元格拆分成左右相邻的两个单元格。*/
function test() {
    let table = Windows.Item(1).Selection.ShapeRange.Table
    let cell = table.Cell(table.Rows.Count, table.Columns.Count)
    cell.Split(1, 2)
}
```
