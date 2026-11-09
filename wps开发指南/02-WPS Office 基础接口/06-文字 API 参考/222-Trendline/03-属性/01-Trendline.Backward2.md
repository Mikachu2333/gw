# Trendline.Backward2

返回或设置趋势线向后延伸的周期数目（或散点图中的单位个数）。可读/写 **Double** 类型。



## 语法

express.**Backward2**

express   一个代表 **Trendline** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例对活动文档中第一个内嵌图表的第一个系列的第一条趋势线向前和向后延伸的周期数进行设置。本示例应在包含具有趋势线的单个序列的 2D 柱形图上运行。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let trendline = inlineShape.Chart.SeriesCollection(1).Trendlines(1)
        trendline.Forward2 = 5
        trendline.Backward2 = 0.5
    }
}
```


```JavaScript
/*此示例显示第一个文档上的第一个形状中图表的第二个数据系列的第一条趋势线向后延伸的周期数。*/
function test() {
    let trendline = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Trendlines(1)
    alert(trendline.Backward2)
}
```
