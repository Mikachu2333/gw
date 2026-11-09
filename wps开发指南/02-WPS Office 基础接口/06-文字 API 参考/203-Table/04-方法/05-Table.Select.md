# Table.Select

选择指定的表格。



## 语法

express.**Select()**

express   一个代表 **Table** 对象的变量。

## 返回值

void

## 说明


使用此方法后，可使用 **Selection** 对象处理所选项目。有关详细信息，请参阅 处理 Selection 对象。



## 示例


```JavaScript
/*本示例选中活动文档的第一个表格，并显示表格的行数和列数。*/
function test() {
    ActiveDocument.Tables.Item(1).Select()
    alert(`${Selection.Range.Rows.Count}行、${Selection.Range.Columns.Count}列`)
}
```


```JavaScript
/*本示例选中第一文档上的第一个表格，并对表格应用1.5磅宽的双实线外部边框。*/
function test() {
    Documents.Item(1).Tables.Item(1).Select()
    Selection.Range.Borders.OutsideLineWidth = wdLineWidth150pt
    Selection.Borders.OutsideLineStyle = wdLineStyleDouble
}
```
