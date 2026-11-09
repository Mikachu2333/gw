# Trendline.Period

返回或设置移动平均趋势线的周期。可读/写 **Long** 类型。



## 语法

express.**Period**

express   一个代表 **Trendline** 对象的变量。

## 类型

number（int4 精度）

## 说明


该属性的值可以介于 2 到 255 之间。



## 示例


```JavaScript
/*本示例设置活动文档中第一个内嵌图表的第一个系列的第一条趋势线的移动平均趋势线的周期。应在包含移动平均趋势线的单个序列的 2D 柱形图上运行该示例。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let trendline = inlineShape.Chart.SeriesCollection(1).Trendlines(1)
        if (trendline.Type == xlMovingAvg) {
            trendline.Period = 3
        }
    }
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的第二个数据系列的第一条趋势线的类型设置为xlMovingAvg，并显示该趋势线的移动平均趋势线的周期。*/
function test() {
    let trendline = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Trendlines(1)
    trendline.Type = xlMovingAvg
    alert(trendline.Period)
}
```
