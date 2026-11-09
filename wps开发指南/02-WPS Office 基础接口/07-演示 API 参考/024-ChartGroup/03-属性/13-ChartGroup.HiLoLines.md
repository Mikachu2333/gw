# ChartGroup.HiLoLines

返回折线图上一个系列的高低点连线。只读 **[HiLoLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HiLoLines/obj)** 对象。



## 语法

express.**HiLoLines**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

HiLoLines

## 说明


该属性仅适用于折线图。



## 示例


```JavaScript
/*本示例为活动演示文稿的第一张幻灯片中第一个图表上的第一个图表组启用高低点连线，然后设置其线型和粗细。应该在具有三个系列类似股票报价的数据（最高价-最低价-收盘价）的 2D 折线图上运行示例。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let chartGroup = shape.Chart.ChartGroups(1)
        chartGroup.HasHiLoLines = true
        let border = chartGroup.HiLoLines.Border
        border.LineStyle = xlContinuous
        border.Weight = xlMedium
    }
}
```


```JavaScript
/*本示例选中第一个演示文稿的第一张幻灯片上第一个图表的第一个图表组的高低点连线。*/
function test() {
    let chartGroup = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    chartGroup.HiLoLines.Select()
}
```
