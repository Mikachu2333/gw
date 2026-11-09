# Chart.Legend

返回图表的图例。只读 **[Legend](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Legend/obj)** 对象。



## 语法

express.**Legend**

express   一个代表 **Chart** 对象的变量。

## 类型

Legend

## 示例


```JavaScript
/*本示例对活动文档中的第一个图表应用图例，然后将图例字体颜色设置为蓝色。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.HasLegend = true
        inlineShape.Chart.Legend.Font.Color = RGB(0, 0, 255)
    }
}
```


```JavaScript
/*本示例判断如果活动文档第一个图表的图例可见，则将图例字号设置为12磅。*/
function test() {
    let chart = Application.ActiveDocument.InlineShapes(1).Chart
    if (chart.HasLegend) {
        chart.Legend.Font.Size = 12
    }
}
```
