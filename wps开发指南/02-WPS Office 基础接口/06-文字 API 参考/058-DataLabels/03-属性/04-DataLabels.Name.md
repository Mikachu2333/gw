# DataLabels.Name

返回对象的名称。只读 **String** 类型。



## 语法

express.**Name**

express   一个代表 **DataLabels** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档中第一张内嵌图表的第一个数据系列的数据标签的名称。*/
function test() {
    let dataLabels = Application.ActiveDocument.InlineShapes(1).Chart.SeriesCollection(1).DataLabels()
    alert(dataLabels.Name)
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第三个数据系列的数据标签的名称。*/
function test() {
    let dataLabels = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).DataLabels()
    alert(`数据标签的名称：${dataLabels.Name}`)
}
```
