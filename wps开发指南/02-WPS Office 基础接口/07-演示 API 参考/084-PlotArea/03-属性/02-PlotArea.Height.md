# PlotArea.Height

以磅为单位返回或设置对象的高度。可读/写 **Double** 类型。



## 语法

express.**Height**

express   一个代表 **PlotArea** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表的绘图区的高度。*/
function test() {
    let plotArea = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.PlotArea
    alert(plotArea.Height + " 磅")
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一个图表的绘图区的高度设置为原高度的一半。*/
function test() {
    let plotArea = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.PlotArea
    plotArea.Height /= 2
}
```
