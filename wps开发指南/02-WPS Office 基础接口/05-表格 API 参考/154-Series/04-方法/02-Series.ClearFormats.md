# Series.ClearFormats

清除对象的格式设置。



## 语法

express.**ClearFormats()**

express   一个代表 **Series** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*此示例清除图表工作表 Chart1 上的第一个系列格式设置。*/
function test() {
    let series1 = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1)
    series1.ClearFormats()
}
```


```JavaScript
/*此示例删除活动工作表上的第一个图表的第二个系列的格式设置。*/
function test() {
    ActiveSheet.ChartObjects(1).Chart.SeriesCollection(2).ClearFormats()
}
```
