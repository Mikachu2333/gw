# Cells.DistributeHeight

将指定单元格调整为等高。



## 语法

express.**DistributeHeight()**

express   一个代表 **Cells** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档的第一张表格的高度调整为相等。*/
function test() {
    Application.ActiveDocument.Tables.Item(1).Range.Cells.DistributeHeight()
}
```


```JavaScript
/*本示例将第一张表格的前三行高度调整为相等。*/
function test() {
    let tables = Application.ActiveDocument.Tables
    if (tables.Count > 0) {
        let rngTemp = Application.ActiveDocument.Range(tables.Item(1).Rows.Item(1).Range.Start, tables.Item(1).Rows.Item(3).Range.End)
        rngTemp.Cells.DistributeHeight()
    }
}
```
