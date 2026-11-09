# Cell.Delete

删除一个或多个表格单元格并可选择控制如何移动剩余的单元格。



## 语法

express.**Delete(ShiftCells)**

express   一个代表 **Cell** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ShiftCells | 可选 | any | 剩余单元格移动的方向。可以是任意 WdDeleteCells 常量。如果省略，最后删除的单元格的右侧单元格向左移动。 |

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档中第一个表格中的第一个单元格*/
function test() {
    let Response = MsgBox("Are you sure you want to delete the cell?", jsYesNo)
    if (Response == jsResultYes) {
        Application.ActiveDocument.Tables.Item(1).Cell(1, 1).Delete()
    }
}
```


```JavaScript
/*本示例删除活动文档中第一个表格中的第一个单元格所在的整行单元格*/
function test() {
    Application.ActiveDocument.Tables.Item(1).Cell(1, 1).Delete(wdDeleteCellsEntireRow)
}
```
