# CellRange.Item

从指定的 **CellRange** 集合中返回单个 **Cell** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **CellRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 集合中要返回的单个 **Cell** 对象的索引号。 |

## 返回值

Cell

## 示例


```JavaScript
/*本示例合并活动窗口所选表格的第一行的第一个单元格和第二个单元格。*/
function test() {
    let table = ActiveWindow.Selection.ShapeRange.Table
    let cellRange = table.Rows.Item(1).Cells
    cellRange.Item(1).Merge(cellRange.Item(2))
}
```


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个表格第二列的第二个单元格拆分成上下相邻的两个单元格。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let cellRange = shape.Table.Columns.Item(2).Cells
    cellRange.Item(2).Split(2, 1)
}
```
