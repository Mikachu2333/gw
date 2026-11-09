# Series.AxisGroup

返回坐标轴组的类型。可读/写 **[XlAxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlAxisGroup)** 。



## 语法

express.**AxisGroup**

express   一个代表 **Series** 对象的变量。

## 类型

XlAxisGroup

## 示例


```JavaScript
/*本示例将活动演示文稿上第一张幻灯片中第一个图表的第二个系列的坐标轴组类型设置为次坐标轴组。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(2).AxisGroup = xlSecondary
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿上第二张幻灯片中第一个图表的第三个系列的坐标轴组类型是否为主坐标轴组。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(2).Shapes.Item(1)
    alert(shape.Chart.SeriesCollection(3).AxisGroup == xlPrimary)
}
```
