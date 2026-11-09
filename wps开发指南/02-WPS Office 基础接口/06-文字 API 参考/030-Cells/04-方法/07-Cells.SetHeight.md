# Cells.SetHeight

设定表格单元格的高度。



## 语法

express.**SetHeight(RowHeight, HeightRule)**

express   一个代表 **Cells** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| RowHeight | 必选 | any | 一行或多行的高度，以磅为单位。 |
| HeightRule | 必选 | WdRowHeightRule | 确定指定单元格高度的方法。 |

## 返回值

void

## 说明


设置 **Cells** 对象的 **SetHeight** 属性将自动设置整行的高度。



## 示例


```JavaScript
/*本示例将所选单元格的行高设置为至少 18 磅。*/
function test() {
    if (Application.Selection.Information(wdWithInTable)) {
        Application.Selection.Cells.SetHeight(18, wdRowHeightAtLeast)
    } else {
        alert("The insertion point is not in a table.")
    }
}
```


```JavaScript
/*本示例将活动文档上第一张表格的第一行单元格的高度设置为20磅。*/
function test() {
    let cells = Application.ActiveDocument.Tables.Item(1).Rows.Item(1).Cells
    cells.SetHeight(20, wdRowHeightExactly)
}
```
