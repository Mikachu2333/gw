# Application.ActiveChart

返回一个 **[Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/obj)** 对象，它代表活动图表（嵌入式图表或图表工作表）。嵌入式图表在被选中或激活时被认为是活动的。当没有图表处于活动状态时，此属性返回 **null** 。



## 语法

express.**ActiveChart**

express   一个代表 **Application** 对象的变量。

## 类型

Chart

## 说明


如果不指定对象识别符，此属性返回活动工作簿中的活动图表。



## 示例


```JavaScript
/*此示例打开活动图表的图例。*/
function test() {
    Application.ActiveChart.HasLegend = true
}
```


```JavaScript
/*本示例激活图表工作表 Chart1 为活动图表，并设置活动图表的配色方案。*/
function test() {
    Application.Charts.Item("Chart1").Activate()
    Application.ActiveChart.ChartColor = 1
}
```
