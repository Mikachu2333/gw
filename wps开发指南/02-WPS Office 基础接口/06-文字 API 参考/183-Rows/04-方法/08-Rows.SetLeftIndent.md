# Rows.SetLeftIndent

设置表格中一行或多行的缩进。



## 语法

express.**SetLeftIndent(LeftIndent, RulerStyle)**

express   一个代表 **Rows** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| LeftIndent | 必选 | number（float 精度） | 指定的一行或多行的当前左边缘与所需左边缘之间的距离（以磅为单位）。 |
| RulerStyle | 必选 | WdRulerStyle | 控制当左缩进发生变化时 WPS 调整表格的方式。 **WdRulerStyle** 行为适用于左对齐的表格。居中和右对齐表格的 **WdRulerStyle** 行为不可预测；在这种情况下，请谨慎使用 **SetLeftIndent** 方法。 |

## 返回值

void

## 示例


```JavaScript
/*本示例在新文档中创建一个表格，并将表格中的所有行缩进 0.5 英寸（36 磅）。在更改左缩进时，单元格宽度将调整以保持表格的右边缘。*/
function test() {
    let document = Documents.Add()
    let table = document.Tables.Add(Selection.Range, 3, 3)
    table.Rows.SetLeftIndent(InchesToPoints(0.5), wdAdjustSameWidth)
}
```


```JavaScript
/*本示例将活动文档的第一个表格的所有行缩进 18 磅，并通过缩小第一列的宽度来保持表格的右边界位置。*/
function test() {
    if (ActiveDocument.Tables.Count > 0) {
        ActiveDocument.Tables.Item(1).Rows.SetLeftIndent(18, wdAdjustFirstColumn)
    }
}
```
