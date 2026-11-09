# Cell.SetWidth

设置表格列或单元格的宽度



## 语法

express.**SetWidth(ColumnWidth, RulerStyle)**

express   一个代表 **Cell** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ColumnWidth | 必选 | number（float 精度） | 指定列的宽度，以磅为单位。 |
| RulerStyle | 必选 | WdRulerStyle | 控制 WPS 调整单元格宽度的方式。 |

## 返回值

void

## 说明


上述 **WdRulerStyle** 行为应用于左对齐的表格。 **WdRulerStyle** 行为应用于中对齐和右对齐的表格时可能会出现未知效果，因此应谨慎使用 **SetWidth** 方法。



## 示例


```JavaScript
/*本示例在新文档中创建一张表格，设置第二行第一个单元格宽度为 1.5 英寸。本示例保持表格中其他单元格的宽度。*/
function test() {
    let newDoc = Application.Documents.Add()
    let newTable = newDoc.Tables.Add(Selection.Range, 3, 3)
    newTable.Cell(2, 1).SetWidth(InchesToPoints(1.5), wdAdjustNone)
}
```


```JavaScript
/*本示例设置包含插入点的单元格宽度为 36 磅。本示例缩小第一列的宽度以保持表格的右边界位置。*/
function test() {
    if (Application.Selection.Information(wdWithInTable)) {
        let cell = Application.Selection.Cells.Item(1)
        cell.SetWidth(36, wdAdjustFirstColumn)
    } else {
        alert("The insertion point is not in a table.")
    }
}
```
