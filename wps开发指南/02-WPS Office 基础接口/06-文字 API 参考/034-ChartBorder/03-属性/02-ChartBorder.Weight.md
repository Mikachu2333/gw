# ChartBorder.Weight

返回或设置边框的粗细。可读/写 **[XlBorderWeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlBorderWeight)** 。



## 语法

express.**Weight**

express   一个代表 **ChartBorder** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例将活动文档中第一个图表的数值轴的边框粗细设置为中等。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.Axes(xlValue).Border.Weight = xlMedium
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第二个数据系列的第一个趋势线的粗细是否为 xlThin。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(1)
    alert(shape.Chart.SeriesCollection(2).Trendlines(1).Border.Weight == xlThin)
}
```
