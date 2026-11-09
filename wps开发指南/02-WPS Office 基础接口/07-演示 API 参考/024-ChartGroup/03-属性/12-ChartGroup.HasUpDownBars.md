# ChartGroup.HasUpDownBars

如果折线图中有涨跌柱线，则其值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasUpDownBars**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于折线图。



## 示例


```JavaScript
/*本示例为活动演示文稿的第一张幻灯片中第一个图表的第一个图表组启用涨跌柱线，并对其颜色进行设置。应在具有两个序列的二维折线图上运行示例，这些序列在一个或多个数据点相互交叉。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let chartGroup = shape.Chart.ChartGroups(1)
        chartGroup.HasUpDownBars = true
        chartGroup.DownBars.Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
        chartGroup.UpBars.Format.Fill.ForeColor.RGB = RGB(0, 0, 255)
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第一个图表组是否具有涨跌柱线。*/
function test() {
    let chartGroup = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.HasUpDownBars)
}
```
