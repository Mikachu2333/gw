# Trendline.NameIsAuto

如果自动确定趋势线的名称，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**NameIsAuto**

express   一个代表 **Trendline** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置活动文档中第一个内嵌图表的第一个系列的第一条趋势线的名称由WPS自动确定。应在包含具有趋势线的单个序列的 2D 柱形图上运行示例。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).Trendlines(1).NameIsAuto = true
    }
}
```


```JavaScript
/*此示例显示第一个文档上的第一个形状中图表的第二个数据系列的第一条趋势线的名称是否由WPS自动确定。*/
function test() {
    let trendline = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Trendlines(1)
    alert(trendline.NameIsAuto)
}
```
