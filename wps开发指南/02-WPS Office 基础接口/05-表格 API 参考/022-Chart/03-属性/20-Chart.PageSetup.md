# Chart.PageSetup

返回一个 **[PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/obj)** 对象，它包含用于指定对象的所有页面设置。只读。



## 语法

express.**PageSetup**

express   一个代表 **Chart** 对象的变量。

## 类型

PageSetup

## 示例


```JavaScript
/*此示例将图表工作表 Chart1 的中央页眉的文字设置为“December Sales”。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.PageSetup.CenterHeader = "December Sales"
}
```


```JavaScript
/*此示例将图表工作表 Chart1 的页面方向设置为横向。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.PageSetup.Orientation = xlLandscape
}
```
