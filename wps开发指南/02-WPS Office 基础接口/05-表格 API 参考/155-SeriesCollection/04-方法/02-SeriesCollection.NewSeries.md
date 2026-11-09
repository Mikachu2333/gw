# SeriesCollection.NewSeries

创建新系列。返回代表该新系列的 **Series** 对象。



## 语法

express.**NewSeries()**

express   一个代表 **SeriesCollection** 对象的变量。

## 返回值

Series

## 说明


本方法对数据透视图无效。



## 示例


```JavaScript
/*本示例向图表工作表 Chart1 中添加新系列。*/
function test() {
    let ns = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection().NewSeries()
}
```


```JavaScript
/*此示例向第一张工作表中第一个图表添加新系列。*/
function test() {
    Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection().NewSeries()
}
```
