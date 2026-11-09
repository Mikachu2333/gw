# TickLabels.Depth

返回分类轴刻度线标签的级别数。只读 **Long** 类型。



## 语法

express.**Depth**

express   一个代表 **TickLabels** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表的分类轴的刻度线标签的级别数。*/
function test() {
    let tickLabels = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlCategory).TickLabels
    alert(tickLabels.Depth)
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的标题为“test”，则显示该图表上类别轴的刻度线标签的级别数。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    if (chart.ChartTitle.Caption == "test") {
        alert(chart.Axes(xlCategory).TickLabels.Depth)
    }
}
```
