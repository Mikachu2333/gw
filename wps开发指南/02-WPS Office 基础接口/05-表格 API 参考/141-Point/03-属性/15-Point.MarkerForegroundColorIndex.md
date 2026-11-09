# Point.MarkerForegroundColorIndex

返回或设置数据标志的前景色，表示为当前调色板中的索引或下列 **[XlColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlColorIndex)** 常量之一： **xlColorIndexAutomatic** 或 **xlColorIndexNone** 。仅适用于折线图、散点图和雷达图。 **Long** 类型，可读写。



## 语法

express.**MarkerForegroundColorIndex**

express   一个代表 **Point** 对象的变量。

## 类型

XlColorIndex

## 示例


```JavaScript
/*此示例为 Chart1 中第一个数据系列的第二个数据点的标记设置背景色和前景色。*/
function test() {
    let point = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).Points(2)
    point.MarkerBackgroundColorIndex = 4  //green
    point.MarkerForegroundColorIndex = 3  //red
}
```


```JavaScript
/*此示例显示 Chart1 中第四个数据系列的第三个数据点标记的前景色是否为自动配色。*/
function test() {
    let point = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(4).Points(3)
    alert(point.MarkerForegroundColorIndex == xlColorIndexAutomatic)
}
```
