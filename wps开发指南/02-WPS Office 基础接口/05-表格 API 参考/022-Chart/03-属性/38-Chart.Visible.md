# Chart.Visible

返回或设置一个 **[XlSheetVisibility](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSheetVisibility)** 值，它确定对象是否可见。



## 语法

express.**Visible**

express   一个代表 **Chart** 对象的变量。

## 类型

XlSheetVisibility

## 示例


```JavaScript
/*本示例设置图表工作表 Chart1 为可见。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.Visible = xlSheetVisible
}
```


```JavaScript
/*本示例显示图表工作表 Chart2 是否被隐藏 。*/
function test() {
    let chart = Application.Charts.Item("Chart2")
    alert(chart.Visible == xlSheetHidden)
}
```
