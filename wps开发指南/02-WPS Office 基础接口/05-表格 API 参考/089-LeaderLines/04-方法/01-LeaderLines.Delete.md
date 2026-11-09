# LeaderLines.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **LeaderLines** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*此示例删除图表工作表 Chart1 上的第一个数据系列的引导线。*/
function test() {
    let series1 = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1)
    series1.LeaderLines.Delete()
}
```


```JavaScript
/*本示例删除第一张工作表上第一个图表的数据系列 1 的引导线。*/
function test() {
    let series1 = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(1)
    series1.LeaderLines.Delete()
}
```
