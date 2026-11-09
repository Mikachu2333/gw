# DataLabels.NumberFormatLinked

如果指定数字格式指向单元格（以便当单元格的格式更改时数据标签的格式也作相应的改动），则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**NumberFormatLinked**

express   一个代表 **DataLabels** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动文档中第一张内嵌图表的第二个数据系列的数据标签的数字格式是否指向单元格。*/
function test() {
    let dataLabels = Application.ActiveDocument.InlineShapes(1).Chart.SeriesCollection(2).DataLabels()
    alert(dataLabels.NumberFormatLinked)
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表的第二个数据系列的数据标签的数字格式指向单元格。*/
function test() {
    let dataLabels = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).DataLabels()
    dataLabels.NumberFormatLinked = true
}
```
