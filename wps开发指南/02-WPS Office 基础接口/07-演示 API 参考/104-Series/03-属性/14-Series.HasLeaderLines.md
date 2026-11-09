# Series.HasLeaderLines

如果系列有引导线，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasLeaderLines**

express   一个代表 **Series** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于饼图。



## 示例


```JavaScript
/*本示例向活动演示文稿上第一张幻灯片中第一个饼图的第一个系列添加数据标签和引导线。如果看不到引导线，可从饼图中手动拖出其中一个数据标签以便显示引导线。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let series = shape.Chart.SeriesCollection(1)
        series.HasDataLabels = true
        series.DataLabels.Position = xlLabelPositionBestFit
        series.HasLeaderLines = true
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿上第二张幻灯片中第一个饼图的第一个系列是否具有引导线。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(2).Shapes.Item(1)
    alert(shape.Chart.SeriesCollection(1).HasLeaderLines)
}
```
