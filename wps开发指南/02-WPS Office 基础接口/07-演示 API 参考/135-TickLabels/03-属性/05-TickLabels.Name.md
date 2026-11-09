# TickLabels.Name

返回对象的名称。只读 **String** 类型。



## 语法

express.**Name**

express   一个代表 **TickLabels** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表的类别轴刻度线标签的名称。*/
function test() {
    let tickLabels = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlCategory).TickLabels
    alert(tickLabels.Name)
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的标题为“test”，则显示该图表上数值轴的刻度线标签的名称。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    if (chart.ChartTitle.Caption == "test") {
        alert(chart.Axes(xlValue).TickLabels.Name)
    }
}
```
