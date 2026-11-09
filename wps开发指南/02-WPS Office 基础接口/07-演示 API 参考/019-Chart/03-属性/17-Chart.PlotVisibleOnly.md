# Chart.PlotVisibleOnly

如果仅绘制可见单元格，则该值为 **True** 。如果可见单元格和隐藏单元格都绘制，则该值为 **False** 。可读/写 **Boolean** 类型。



## 语法

express.**PlotVisibleOnly**

express   一个代表 **Chart** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个图表设置为仅绘制可见单元格。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.PlotVisibleOnly = true
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第二张图表是否仅绘制可见单元格。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    alert(chart.PlotVisibleOnly)
}
```
