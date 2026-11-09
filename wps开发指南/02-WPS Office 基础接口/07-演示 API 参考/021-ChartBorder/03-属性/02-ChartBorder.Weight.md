# ChartBorder.Weight

返回或设置边框的粗细。可读/写 **[XlBorderWeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlBorderWeight)** 类型。



## 语法

express.**Weight**

express   一个代表 **ChartBorder** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的数值轴的边框粗细设置为xlMedium。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Axes(xlValue).Border.Weight = xlMedium
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第二个数据系列的第一个趋势线的粗细是否为 xlThin。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    alert(shape.Chart.SeriesCollection(2).Trendlines(1).Border.Weight == xlThin)
}
```
