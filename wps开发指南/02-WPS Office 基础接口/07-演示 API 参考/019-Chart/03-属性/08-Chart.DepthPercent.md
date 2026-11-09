# Chart.DepthPercent

返回或设置三维图表的深度，以图表宽度的百分比表示（有效范围从 20% 到 2000%）。可读/写 **Long** 类型。



## 语法

express.**DepthPercent**

express   一个代表 **Chart** 对象的变量。

## 类型

number（int4 精度）

## 说明


该属性只适用于三维图表。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的深度设置为其宽度的 50%，应在三维图表上运行该示例。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.DepthPercent = 50
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片内第一张图表的深度。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    alert(chart.DepthPercent)
}
```
