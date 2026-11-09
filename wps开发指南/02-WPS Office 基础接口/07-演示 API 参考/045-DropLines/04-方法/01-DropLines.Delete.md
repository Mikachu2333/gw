# DropLines.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **DropLines** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例删除活动演示文稿的第一张幻灯片上第一个图表的第一个图表组的垂直线。*/
function test() {
    let chartgroup = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    chartgroup.DropLines.Delete()
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的第一个图表组的垂直线的边框为细线边框，则删除该垂直线。*/
function test() {
    let dropLines = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1).DropLines
    if (dropLines.Border.Weight == xlHairline) {
        dropLines.Delete()
    }
}
```
