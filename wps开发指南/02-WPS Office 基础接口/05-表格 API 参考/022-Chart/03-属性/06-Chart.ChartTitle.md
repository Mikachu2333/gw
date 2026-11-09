# Chart.ChartTitle

返回一个 **[ChartTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/obj)** 对象，该对象表示指定图表的标题。只读。



## 语法

express.**ChartTitle**

express   一个代表 **Chart** 对象的变量。

## 类型

ChartTitle

## 示例


```JavaScript
/*本示例设置图表工作表 Chart1 的标题文本为“First Quarter Sales”。*/
function test() {
    let charts = Application.Charts.Item("Chart1")
    charts.HasTitle = true
    charts.ChartTitle.Text = "First Quarter Sales"
}
```


```JavaScript
/*本示例删除活动工作表第一个嵌入式图表的图表标题。*/
function test() {
    let charts = ActiveSheet.ChartObjects(1).Chart
    charts.ChartTitle.Delete()
}
```
