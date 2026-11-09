# Cells.SetWidth

设置表格的列或单元格的宽度。



## 语法

express.**SetWidth(ColumnWidth, RulerStyle)**

express   一个代表 **Cells** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ColumnWidth | 必选 | number（float 精度） | 指定列的宽度，以磅为单位。 |
| RulerStyle | 必选 | WdRulerStyle | 控制 WPS 调整单元格宽度的方式。 |

## 返回值

void

## 说明


上述 **WdRulerStyle** 行为适用于左对齐的表格。 **WdRulerStyle** 行为用于居中和右对齐的表格时可能无法预测，因此 **SetWidth** 方法应谨慎使用。



## 示例


```JavaScript
/*以下示例在新文档中创建一张表格，并将该表格的第一行单元格的宽度设置为 1.5 英寸。此示例保持表格中其他单元格的宽度。*/
function test() {
    let newDoc = Application.Documents.Add()
    let table = newDoc.Tables.Add(Selection.Range, 3, 3)
    table.Rows.Item(1).Cells.SetWidth(InchesToPoints(1.5), wdAdjustNone)
}
```


```JavaScript
/*以下示例将包含插入点的单元格的宽度设置为 36 磅。此示例还缩小第一列的宽度以保持表格的右边缘位置。*/
function test() {
    if (Application.Selection.Information(wdWithInTable)) {
        Application.Selection.Cells.SetWidth(36, wdAdjustFirstColumn)
    } else {
        alert("The insertion point is not in a table.")
    }
}
```
