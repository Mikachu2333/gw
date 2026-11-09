# Chart.HasLegend

如果图表有图例，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasLegend**

express   一个代表 **Chart** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例对活动演示文稿的第一张幻灯片中第一个图表应用图例，然后将图例字体颜色设置为蓝色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.HasLegend = true
        shape.Chart.Legend.Font.Color = RGB(0, 0, 255)
    }
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第二张图表有图例，则通知用户。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    if (chart.HasLegend) {
        alert("图表有图例")
    }
}
```
