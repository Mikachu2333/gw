# Series.InvertIfNegative

如果对象与一个负数相对应时 WPS 就将其反色，则该属性值为 **True** 。可读/写 **Variant** 类型。



## 语法

express.**InvertIfNegative**

express   一个代表 **Series** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例反转活动演示文稿上第一张幻灯片中第一个图表的第一个系列的负数据点颜色*/
function test() {
    let series = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1)
    series.InvertIfNegative = true
}
```


```JavaScript
/*本示例显示第一篇演示文稿上第一张幻灯片中第一个图表的第一个系列的负数据点颜色是否反转*/
function test() {
    let series = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1)
    alert(series.InvertIfNegative)
}
```
