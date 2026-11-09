# ChartGroup.HasRadarAxisLabels

如果雷达图有坐标轴标签，则其值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasRadarAxisLabels**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于雷达图。



## 示例


```JavaScript
/*本示例为活动演示文稿的第一张幻灯片中第一个图表的第一个图表组应用雷达图轴标签，然后设置其颜色。应在雷达图上运行该示例。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let chartGroup = shape.Chart.ChartGroups(1)
        chartGroup.HasRadarAxisLabels = true
        chartGroup.RadarAxisLabels.Font.Color = RGB(0, 255, 0)
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第一个图表组是否具有坐标轴标签。*/
function test() {
    let chartGroup = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.HasRadarAxisLabels)
}
```
