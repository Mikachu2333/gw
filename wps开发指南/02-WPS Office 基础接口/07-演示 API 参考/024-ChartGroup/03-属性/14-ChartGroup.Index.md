# ChartGroup.Index

返回对象在其同类对象所组成的集合内的索引号。只读 **Long** 类型。



## 语法

express.**Index**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表中第一个图表组的索引号。*/
function test() {
    let chartGroup = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.Index)
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的第一个图表组的索引号为1，则开启该图表组中的垂直线。*/
function test() {
    let chartGroup = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    if (chartGroup.Index == 1) {
        chartGroup.HasDropLines = true
    }
}
```
