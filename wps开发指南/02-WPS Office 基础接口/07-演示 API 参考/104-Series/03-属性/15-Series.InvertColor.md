# Series.InvertColor

返回或设置系列中的负数据点的填充颜色。可读写。



## 语法

express.**InvertColor**

express   一个代表 **Series** 对象的变量。

## 类型

number（int4 精度）

## 说明


通过使用 **InvertColor** 属性，您可以将负数据点的填充颜色设置为特定数值、十六进制、八进制或 RGB 颜色值。要将该值设置为 RBG 值，请使用 RGB 函数。也可以不使用 **InvertColor** 属性而改用 **InvertColorIndex** 属性，该属性使用当前调色板中一组更简单的整数值。

为使 **InvertColor** 属性生效，还必须将 **Series** 对象的 **InvertIfNegative** 属性设置为 **True** 。



## 示例


```JavaScript
/*本示例将活动演示文稿上第一张幻灯片中第一个图表的第一个系列的负数据点填充色设置为洋红色*/
function test() {
    let series = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1)
    series.InvertIfNegative = true
    series.InvertColor = RGB(255, 0, 255)
}
```


```JavaScript
/*本示例显示第一篇演示文稿上第一张幻灯片中第一个图表的第二个系列的负数据点填充色是否为红色*/
function test() {
    let series = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2)
    alert(series.InvertColor == RGB(255, 0, 0))
}
```
