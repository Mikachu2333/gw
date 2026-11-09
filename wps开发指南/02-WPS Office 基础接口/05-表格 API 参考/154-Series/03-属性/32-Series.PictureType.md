# Series.PictureType

返回或设置一个 **XlChartPictureType** 值，它代表在柱形或条形图上图片的显示方式。



## 语法

express.**PictureType**

express   一个代表 **Series** 对象的变量。

## 类型

XlChartPictureType

## 示例


```JavaScript
/*本示例设置 Chart1 中的系列一伸展图片。本示例应在带图片数据标志的二维柱形图上运行。*/
function test() {
    Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).PictureType = xlStretch
}
```


```JavaScript
/*此示例显示第一张工作表上的第一个图表的第二个数据系列的图片是否为堆叠类型。*/
function test() {
    let series2 = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(2)
    alert(series2.PictureType == xlStack)
}
```
