# DataLabels.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **DataLabels** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*此示例删除活动文档中第一张内嵌图表的第一个数据系列的数据标签。*/
function test() {
    let dataLabels = Application.ActiveDocument.InlineShapes(1).Chart.SeriesCollection(1).DataLabels()
    dataLabels.Delete()
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的标题文本为“成绩表_2”，则删除该图表第三个数据系列的数据标签。*/
function test() {
    let chart = Application.Documents.Item(1).Shapes.Item(1).Chart
    if (chart.ChartTitle.Caption == "成绩表_2") {
        chart.SeriesCollection(3).DataLabels().Delete()
    }
}
```
