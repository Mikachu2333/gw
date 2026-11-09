# Chart.Tab

为图表返回一个 **[Tab](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Tab/obj)** 对象。



## 语法

express.**Tab**

express   一个代表 **Chart** 对象的变量。

## 类型

Tab

## 示例


```JavaScript
/*本示例将图表工作表 Chart1 选项的颜色索引设置为无颜色。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.Tab.ColorIndex = xlColorIndexNone
}
```


```JavaScript
/*本示例将图表工作表 Chart1 的配色方案中主题颜色的枚举值设置为 xlThemeColorAccent1 。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.Tab.ThemeColor = xlThemeColorAccent1
}
```
