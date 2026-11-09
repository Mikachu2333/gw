# Chart.Hyperlinks

返回一个 **[Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlinks/obj)** 集合，它代表图表的超链接。



## 语法

express.**Hyperlinks**

express   一个代表 **Chart** 对象的变量。

## 类型

Hyperlinks

## 示例


```JavaScript
/*本示例在图表工作表 Chart1 第一个形状中创建新的超链接。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    chart.Hyperlinks.Add(chart.Shapes(1), "https://www.wps.cn/")
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一个内嵌图表超链接的数量。*/
function test() {
    let chart = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart
    alert(chart.Hyperlinks.Count)
}
```
