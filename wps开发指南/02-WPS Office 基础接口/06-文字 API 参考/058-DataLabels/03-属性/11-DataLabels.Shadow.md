# DataLabels.Shadow

返回或设置一个表示对象是否有阴影的值。可读/写 **Boolean** 类型。



## 语法

express.**Shadow**

express   一个代表 **DataLabels** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例为活动文档上第一张内嵌图表的第一个数据系列的数据标签添加阴影。*/
function test() {
    let dataLabels = Application.ActiveDocument.InlineShapes(1).Chart.SeriesCollection(1).DataLabels()
    dataLabels.Shadow = true
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第二个数据系列的数据标签的阴影是否可见。*/
function test() {
    let dataLabels = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).DataLabels()
    alert(dataLabels.Shadow)
}
```
