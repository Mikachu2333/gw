# Chart.ChartTitle

返回一个 **[ChartTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartTitle/obj)** 对象，该对象表示指定图表的标题。只读。



## 语法

express.**ChartTitle**

express   一个代表 **Chart** 对象的变量。

## 类型

ChartTitle

## 说明


 **ChartTitle** 对象不存在，不能使用，除非该图表的 **[HasTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/HasTitle)** 属性为 **True** 。



## 示例


```JavaScript
/*本示例设置活动文档中第一张图表的标题文本为“First Quarter Sales”。*/
function test() {
    let charts = Application.ActiveDocument.InlineShapes(1).Chart
    charts.HasTitle = true
    charts.ChartTitle.Text = "First Quarter Sales"
}
```


```JavaScript
/*本示例删除活动文档中第一张图表的图表标题。*/
function test() {
    let charts = Application.ActiveDocument.InlineShapes(1).Chart
    charts.ChartTitle.Delete()
}
```
