# DataLabel.Formula

获取或设置一个 **String** 值，该值以英语使用 A1 样式表示法来表示对象的公式。可读/写。



## 语法

express.**Formula**

express   一个代表 **DataLabel** 对象的变量。

## 类型

string

## 说明


有关 A1 样式表示法的详细信息，请参阅操作方法：使用 A1 表示法引用单元格和区域。



## 示例


```JavaScript
/*本示例设置以 A1 样式表示的活动文档中第一张内嵌图表的第二个数据系列的第一个数据标签的公式。*/
function test() {
    let dataLabel = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(2).DataLabels(1)
    dataLabel.Formula = "example1"
}
```


```JavaScript
/*本示例显示以 A1 样式表示的第一个文档上第一个形状中图表的第一个数据系列的第二个数据标签的公式。*/
function test() {
    let dataLabel = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).DataLabels(2)
    alert(dataLabel.Formula)
}
```
