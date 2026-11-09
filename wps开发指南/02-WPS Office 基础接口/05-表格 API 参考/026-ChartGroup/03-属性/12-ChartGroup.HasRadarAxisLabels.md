# ChartGroup.HasRadarAxisLabels

如果雷达图有坐标轴标签，则该值为 **True** 。仅适用于雷达图。 **Boolean** 类型，可读写。



## 语法

express.**HasRadarAxisLabels**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中第一个图表组的雷达图坐标轴标签，并对这些标签的颜色进行设置。本示例应在雷达图上运行。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.HasRadarAxisLabels = true
    chartgroup.RadarAxisLabels.Font.ColorIndex = 3
}
```


```JavaScript
/*本示例判断工作表 Sheet1 第一个内嵌图表中第一个图表组是否含有雷达图坐标轴标签，并通知用户。本示例应在雷达图上运行。*/
function test() {
    let chartgroup = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    if (chartgroup.HasRadarAxisLabels) {
        alert("图表组含有坐标轴标签")
    } else {
        alert("图表组不含有坐标轴标签")
    }
}
```
