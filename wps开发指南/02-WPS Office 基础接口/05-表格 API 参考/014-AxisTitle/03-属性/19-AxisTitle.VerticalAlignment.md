# AxisTitle.VerticalAlignment

返回或设置一个 **Variant** 值，它代表指定对象的垂直对齐方式。



## 语法

express.**VerticalAlignment**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

any

## 说明


此属性的值可以设置为 **[XlVAlign](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlVAlign)** 常量之一。



## 示例


```JavaScript
/*本示例将图表工作表 Chart1 中图表的类别轴标题的垂直对齐方式设置为向下。*/
function test() {
    let axistitle = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory).AxisTitle
    axistitle.VerticalAlignment = xlVAlignBottom
}
```


```JavaScript
/*本示例将工作表 Sheet1 中第一张图表的数值轴标题的垂直对齐方式设置为分布式。*/
function test() {
    let axistitle = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue).AxisTitle
    axistitle.VerticalAlignment = xlVAlignDistributed
}
```
