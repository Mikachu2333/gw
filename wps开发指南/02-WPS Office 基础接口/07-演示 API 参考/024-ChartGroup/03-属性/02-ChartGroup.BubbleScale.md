# ChartGroup.BubbleScale

返回或设置指定图表组中气泡的缩放比例。可读/写 **Long** 类型。



## 语法

express.**BubbleScale**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

number（int4 精度）

## 说明


可将该属性设置为从 0（零）到 300 之间的整数，表示相对于默认大小的百分比。

该属性仅适用于气泡图。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的第一个图表组的气泡大小设置为默认大小的 200%。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.ChartGroups(1).BubbleScale = 200
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第一个图表组中气泡的比例因子。*/
function test() {
    let chartGroup = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.BubbleScale)
}
```
