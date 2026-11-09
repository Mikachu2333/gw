# Chart.AutoScaling

如果 WPS 自动对三维图表进行缩放，使之与等效的二维图表的大小相近，则为 **True** 。 **[RightAngleAxes](#TODO)** 属性必须为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**AutoScaling**

express   一个代表 **Chart** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例自动缩放活动文档中的第一个图表。本示例应在 3D 图表上运行。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.AutoScaling = true
    }
}
```


```JavaScript
/*本示例显示WPS是否自动缩放第一个文档上第一张图表。*/
function test() {
    let chart = Application.Documents.Item(1).InlineShapes(1).Chart
    alert(chart.AutoScaling)
}
```
