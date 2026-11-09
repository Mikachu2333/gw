# Tables.Add

返回一个 **Table** 对象，该对象代表添加到文档中的新的空白表格。



## 语法

express.**Add(Range, NumRows, NumColumns, DefaultTableBehavior, AutoFitBehavior)**

express   一个代表 **Tables** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 表格出现的区域。如果该区域未折叠，表格将替换该区域。 |
| NumRows | 必选 | number（int4 精度） | 要在表格中包括的行数。 |
| NumColumns | 必选 | number（int4 精度） | 要在表格中包括的列数。 |
| DefaultTableBehavior | 可选 | any | 设置一个值来指定 WPS 是否要根据单元格的内容自动调整表格单元格的大小（“自动调整”功能）。可以是下列常量之一： **wdWord8TableBehavior** （禁用“自动调整”功能）或 **wdWord9TableBehavior** （启用“自动调整”功能）。默认常量为 **wdWord8TableBehavior** 。 |
| AutoFitBehavior | 可选 | any | 用于设置 WPS 调整表格大小的“自动调整”规则。可以为一个 **WdAutoFitBehavior** 常量。 |

## 返回值

Table

## 示例


```JavaScript
/*本示例在活动文档的开头添加一个 3 行 4 列的空表格*/
function test() {
    let range = Application.ActiveDocument.Range(0, 0)
    Application.ActiveDocument.Tables.Add(range, 3, 4)
}
```


```JavaScript
/*本示例在活动文档的结尾添加一个 6 行 10 列的空白新表格*/
function test() {
    let range = Application.ActiveDocument.Content
    range.Collapse(wdCollapseEnd)
    ActiveDocument.Tables.Add(range, 6, 10)
}
```


```JavaScript
/*本示例向新文档中添加一个 3 行 5 列的表格，然后在表格的每个单元格中插入数据*/
function test() {
    let docNew = Application.Documents.Add()
    let tblNew = docNew.Tables.Add(Selection.Range, 3, 5)
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 5; j++) {
            tblNew.Cell(i, j).Range.InsertAfter("Cell: R" + i + ", C" + j)
        }
    }
    tblNew.Columns.AutoFit()
}
```
