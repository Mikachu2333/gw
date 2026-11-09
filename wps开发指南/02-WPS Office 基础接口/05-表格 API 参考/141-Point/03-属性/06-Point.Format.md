# Point.Format

返回 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartFormat/obj)** 对象。只读。



## 语法

express.**Format**

express   一个代表 **Point** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*此示例设置Chart1中第一个系列第三个数据点的填充颜色和边框线大小。*/
function test() {
    let point = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).Points(3)
    point.Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
    point.Format.Line.Weight = 5
}
```


```JavaScript
/*此示例设置图表工作表 Chart1 上第二个系列的所有奇数位的数据点边框颜色*/
function test() {
    let series = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2)
    for (let i = 1; i <= series.Points().Count; i += 2) {
        series.Points(i).Format.Line.ForeColor.RGB = RGB(0, 0, 255)
    }
}
```
