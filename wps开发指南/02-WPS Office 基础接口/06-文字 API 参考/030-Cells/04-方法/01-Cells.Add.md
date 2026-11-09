# Cells.Add

返回一个 **Cell** 对象，该对象代表添加到表格中的单元格。



## 语法

express.**Add(BeforeCell)**

express   一个代表 **Cells** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| BeforeCell | 可选 | any | 指定一个 Cell 对象，该对象代表将紧靠新单元格右侧显示的单元格。 |

## 返回值

Cell

## 示例


```JavaScript
/*本示例对活动文档第一张表格添加一列*/
function test() {
    let table = ActiveDocument.Tables.Item(1)
    table.Columns.Item(1).Cells.Add()
}
```


```JavaScript
/*本示例在活动文档第一张表格的第一行第一列单元格前添加一个新单元格*/
function test() {
    let table = ActiveDocument.Tables.Item(1)
    let newCell = table.Range.Cells.Add(table.Cell(1, 1))
    newCell.Range.InsertAfter("0")
}
```
