# ChartGroup.UpBars

返回折线图的涨柱线。只读 **[UpBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/UpBars/obj)** 对象。



## 语法

express.**UpBars**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

UpBars

## 说明


该属性仅适用于折线图。



## 示例


```JavaScript
/*本示例为活动文档中第一个图表的第一个图表组启用涨跌柱线，并对其颜色进行设置。应在具有两个序列的二维折线图上运行示例，这些序列在一个或多个数据点相互交叉。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let chartGroup = inlineShape.Chart.ChartGroups(1)
        chartGroup.HasUpDownBars = true
        chartGroup.DownBars.Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
        chartGroup.UpBars.Format.Fill.ForeColor.RGB = RGB(0, 0, 255)
    }
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的第一个图表组拆的涨跌柱线设置为可见，并设置涨柱线的边框线条样式和宽度。*/
function test() {
    let chartGroup = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    chartGroup.HasUpDownBars = true
    chartGroup.UpBars.Border.LineStyle = xlDash
    chartGroup.UpBars.Border.Width = 3
}
```
