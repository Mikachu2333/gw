# Series.Format

返回 **ChartFormat** 对象。只读。



## 语法

express.**Format**

express   一个代表 **Series** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*此示例将图表工作表 Chart1 上的第二个数据系列的颜色设置为红色。*/
function test() {
    let series2 = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2)
    series2.Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*此示例将活动工作表上的第一个图表的第三个系列阴影向右侧偏移 5 磅。*/
function test() {
    ActiveSheet.ChartObjects(1).Chart.SeriesCollection(3).Format.Shadow.OffsetX = 5
}
```
