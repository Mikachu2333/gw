# Trendline.Forward2

返回或设置趋势线向前延伸的周期数目（或散点图中的单位个数）。可读/写 **Double** 类型。



## 语法

express.**Forward2**

express   一个代表 **Trendline** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一个图表的第一个系列的第一条趋势线向前和向后延伸的周期数。本示例应在包含具有趋势线的单个序列的 2D 柱形图上运行。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let trendline = shape.Chart.SeriesCollection(1).Trendlines(1)
        trendline.Forward2 = 5
        trendline.Backward2 = 0.5
    }
}
```


```JavaScript
/*此示例显示第一个演示文稿的第一张幻灯片上第一个图表的第二个数据系列的第一条趋势线向前延伸的周期数。*/
function test() {
    let trendline = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Trendlines(1)
    alert(trendline.Forward2)
}
```
