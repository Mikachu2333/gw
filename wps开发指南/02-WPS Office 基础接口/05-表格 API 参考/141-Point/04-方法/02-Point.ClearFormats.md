# Point.ClearFormats

清除对象的格式设置。



## 语法

express.**ClearFormats()**

express   一个代表 **Point** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*此示例清除图表工作表 Chart1 上第一个系列的第一个数据点的格式*/
function test() {
    let point = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).Points(1)
    point.ClearFormats()
}
```


```JavaScript
/*此示例清除图表工作表 Chart1 上第二个系列的所有奇数位的数据点的格式*/
function test() {
    let series = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2)
    for (let i = 1; i <= series.Points().Count; i += 2) {
        series.Points(i).ClearFormats()
    }
}
```
