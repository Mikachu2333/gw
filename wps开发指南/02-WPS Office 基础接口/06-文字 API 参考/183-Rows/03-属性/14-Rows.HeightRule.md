# Rows.HeightRule

返回或设置确定指定单元格或行高度的规则。 **WdRowHeightRule** 类型，可读写。



## 语法

express.**HeightRule**

express   一个代表 **Rows** 对象的变量。

## 类型

WdRowHeightRule

## 示例


```JavaScript
/*本示例将所选行高度的规则设为按行中最高的单元格自动调整。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.Rows.HeightRule = wdRowHeightAuto
    } else {
        alert("The insertion point is not in a table.")
    }
}
```


```JavaScript
/*本示例显示活动文档第一个表格所有行的行高规则。*/
function test() {
    switch (ActiveDocument.Tables.Item(1).Rows.HeightRule) {
        case wdRowHeightAuto:
            alert("调整行高以适应该行中的最大高度值。")
            break
        case wdRowHeightAtLeast:
            alert("行高至少是最小的指定值。")
            break
        case wdRowHeightExactly:
            alert("行高是固定值。")
            break
    }
}
```
