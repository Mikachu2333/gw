# Trendline.DataLabel

返回与趋势线相关联的数据标签。只读 **[DataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabel/obj)** 对象。



## 语法

express.**DataLabel**

express   一个代表 **Trendline** 对象的变量。

## 类型

DataLabel

## 说明


要对趋势线应用数据标签，需要将 **[DisplayEquation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/DisplayEquation)** 属性或 **[DisplayRSquared](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/DisplayRSquared)** 属性设置为 **True** 。



## 示例


```JavaScript
/*本示例将活动文档上第一个内嵌图表的第一个数据系列的第一条趋势线的 R 平方值设置为可见，并设置数据标签的前景填充色。*/
function test() {
    let trendline = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(1).Trendlines(1)
    trendline.DisplayRSquared = true
    trendline.DataLabel.Format.Fill.ForeColor.RGB = RGB(0, 128, 128)
}
```


```JavaScript
/*本示例判断如果第一个文档上的第一个形状中图表的第二个数据系列的第一条趋势线的公式或 R 平方值为可见，则显示数据标签的公式。*/
function test() {
    let trendline = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Trendlines(1)
    if (trendline.DisplayEquation || trendline.DisplayRSquared) {
        alert(trendline.DataLabel.Formula)
    }
}
```
