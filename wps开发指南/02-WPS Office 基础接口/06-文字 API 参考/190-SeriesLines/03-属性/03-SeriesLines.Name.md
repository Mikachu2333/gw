# SeriesLines.Name

返回对象的名称。只读 **String** 类型。



## 语法

express.**Name**

express   一个代表 **SeriesLines** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档中第一个图表的第一个图表组的系列线名称。*/
function test() {
    let chart = ActiveDocument.InlineShapes.Item(1).Chart
    alert("活动文档中第一个图表的第一个图表组的系列线的名称为：" + chart.ChartGroups(1).SeriesLines.Name)
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第一个图表组的系列线名称。*/
function test() {
    let chart = Documents.Item(1).Shapes.Item(1).Chart
    alert(chart.ChartGroups(1).SeriesLines.Name)
}
```
