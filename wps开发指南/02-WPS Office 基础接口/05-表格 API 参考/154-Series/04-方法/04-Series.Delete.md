# Series.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Series** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*此示例删除活动工作表上的第一个图表的第一个系列。*/
function test() {
    ActiveSheet.ChartObjects(1).Chart.SeriesCollection(1).Delete()
}
```


```JavaScript
/*此示例将图表工作表 Chart1 上的第二个数据系列删除。*/
function test() {
    let series2 = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2)
    series2.Delete()
}
```
