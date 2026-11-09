# Series.MarkerSize

返回或设置数据标志的大小，以磅（磅：指打印的字符的高度的度量单位。1 磅等于 1/72 英寸，或大约等于 1 厘米的 1/28。）为单位。可以是 2 到 72 之间的一个值。 **Long** 型，可读写。



## 语法

express.**MarkerSize**

express   一个代表 **Series** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*此示例设置系列一中所有数据标志的尺寸。*/
function test() {
    Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(1).MarkerSize = 10
}
```


```JavaScript
/*此示例显示图表工作表 Chart1 上的第二个数据系列数据标志的尺寸。*/
function test() {
    let series2 = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2)
    alert(series2.MarkerSize)
}
```
