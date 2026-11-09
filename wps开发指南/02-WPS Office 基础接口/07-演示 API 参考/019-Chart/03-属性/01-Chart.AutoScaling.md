# Chart.AutoScaling

如果 WPP 自动对三维图表进行缩放，使之与等效的二维图表的大小相近，则为 **True** 。 **[RightAngleAxes](#TODO)** 属性必须为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**AutoScaling**

express   一个代表 **Chart** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例自动缩放活动演示文稿的第一张幻灯片的第一个图表。本示例应在 3D 图表上运行。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.AutoScaling = true
    }
}
```


```JavaScript
/*本示例显示WPP是否自动缩放第一个演示文稿的第一张幻灯片的第一张图表。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    alert(chart.AutoScaling)
}
```
