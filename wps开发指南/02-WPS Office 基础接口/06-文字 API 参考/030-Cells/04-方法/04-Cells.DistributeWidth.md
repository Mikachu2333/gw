# Cells.DistributeWidth

将指定单元格调整为等宽。



## 语法

express.**DistributeWidth()**

express   一个代表 **Cells** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将选中的单元格宽度调整为相等*/
function test() {
    Application.Selection.Cells.DistributeWidth()
}
```


```JavaScript
/*本示例将活动文档的第一张表格的宽度调整为相等*/
function test() {
    Application.ActiveDocument.Tables.Item(1).Range.Cells.DistributeWidth()
}
```
