# Rows.SetHeight

设置表格行的高度。



## 语法

express.**SetHeight(RowHeight, HeightRule)**

express   一个代表 **Rows** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| RowHeight | 必选 | number（float 精度） | 一行或多行的高度，以磅为单位。 |
| HeightRule | 必选 | WdRowHeightRule | 用于确定指定行的高度的规则。 |

## 返回值

void

## 示例


```JavaScript
/*本示例在新文档创建一个表格，然后将表格的所有行的行高设置为 0.5 英寸（36 磅）。*/
function test() {
    let document = Documents.Add()
    let table = document.Tables.Add(Selection.Range, 3, 3)
    table.Rows.SetHeight(InchesToPoints(0.5), wdRowHeightExactly)
}
```


```JavaScript
/*本示例将所选表格行的行高最小值设置为 1 英寸。*/
function test() {
    Selection.Rows.SetHeight(InchesToPoints(1), wdRowHeightAtLeast)
}
```
