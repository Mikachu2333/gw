# Selection.InsertCells

向原有表添加单元格。



## 语法

express.**InsertCells(ShiftCells)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ShiftCells | 可选 | any | 指定如何将单元格插入到表的现有列和行中。 |

## 返回值

void

## 说明


插入的单元格数量等于选定内容中单元格的数量。您还可以使用 **Cells** 对象的 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/Add)** 方法插入单元格。



## 示例


```JavaScript
/*本示例在所选单元格的左侧插入新单元格，然后为选定的单元格添加红色的单线边框。*/
function test() {
    if (Selection.Cells.Count >= 1) {
        Selection.InsertCells(wdInsertCellsShiftRight)
        for (let i = 1; i <= Selection.Borders.Count; i++) {
            Selection.Borders.Item(i).LineStyle = wdLineStyleSingle
            Selection.Borders.Item(i).ColorIndex = wdRed
        }
    }
}
```


```JavaScript
/*本示例在表格中所选单元格的左侧插入整列。*/
function test() {
    Application.Selection.InsertCells(wdInsertCellsEntireColumn)
}
```
