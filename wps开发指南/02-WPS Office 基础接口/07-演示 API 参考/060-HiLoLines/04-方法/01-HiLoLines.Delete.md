# HiLoLines.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **HiLoLines** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上第一个图表的第一个图表组的高低点连线删除。*/
function test() {
    let chartgroup = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    chartgroup.HiLoLines.Delete()
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的第一个图表组的高低点连线可见，则将其删除。*/
function test() {
    let chartgroup = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    if (chartgroup.HasHiLoLines) {
        chartgroup.HiLoLines.Delete()
    }
}
```
