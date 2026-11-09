# Cells.Borders

返回一个 **Borders** 集合，该集合代表指定对象的所有边框。



## 语法

express.**Borders**

express   一个代表 **Cells** 对象的变量。

## 类型

Borders

## 示例


```JavaScript
/*本示例将活动文档中第一个表格首行单元格的内部边框设置为单线，外部边框设置为双线*/
function test() {
    let table = Application.ActiveDocument.Tables.Item(1)
    let borders = table.Rows.Item(1).Cells.Borders
    borders.InsideLineStyle = wdLineStyleSingle
    borders.OutsideLineStyle = wdLineStyleDouble
}
```


```JavaScript
/*本示例将活动文档中第一个表格第二列单元格的内部和外部边框设置为红色。*/
function test() {
    let table = Application.ActiveDocument.Tables.Item(1)
    let borders = table.Columns.Item(2).Cells.Borders
    borders.InsideColor = wdColorRed
    borders.OutsideColor = wdColorRed
}
```
