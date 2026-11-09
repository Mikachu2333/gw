# Chart.HasLegend

如果图表有图例，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasLegend**

express   一个代表 **Chart** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例对活动文档中的第一个图表应用图例，然后将图例字体颜色设置为蓝色。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.HasLegend = true
        inlineShape.Chart.Legend.Font.Color = RGB(0, 0, 255)
    }
}
```


```JavaScript
/*本示例判断如果第一个文档上第一张图表有图例，则通知用户。*/
function test() {
    let chart = Application.Documents.Item(1).InlineShapes(1).Chart
    if (chart.HasLegend) {
        alert("图表有图例")
    }
}
```
