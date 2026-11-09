# ChartGroup.RadarAxisLabels

返回指定图表组的雷达图轴标签。只读 **[TickLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TickLabels/obj)** 对象。



## 语法

express.**RadarAxisLabels**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

TickLabels

## 示例


```JavaScript
/*本示例为活动文档中第一个图表的第一个图表组应用雷达图轴标签，然后设置其颜色。应在雷达图上运行该示例。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let chartGroup = inlineShape.Chart.ChartGroups(1)
        chartGroup.HasRadarAxisLabels = true
        chartGroup.RadarAxisLabels.Font.Color = RGB(255, 0, 0)
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第一个图表组的轴标签的文本方向是否为xlTickLabelOrientationAutomatic。*/
function test() {
    let chartGroup = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.RadarAxisLabels.Orientation == xlTickLabelOrientationAutomatic)
}
```
