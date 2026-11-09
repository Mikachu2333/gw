# TickLabels.Offset

返回或设置各级别标签之间的距离以及第一级标签与坐标轴之间的距离。可读/写 **Long** 类型。



## 语法

express.**Offset**

express   一个代表 **TickLabels** 对象的变量。

## 类型

number（int4 精度）

## 说明


其默认距离为百分之百，代表坐标轴标签之间以及标签与坐标轴线之间的默认距离。其值可以为从 0 到 1000 之间的一个整数百分比，表示相对于坐标轴标签的字号。



## 示例


```JavaScript
/*如果偏移量小于 500，则本示例将活动文档中第一个内嵌图表的分类轴上的标签间距设置为当前设置的两倍。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart == msoTrue) {
        let tickLabels = inlineShape.Chart.Axes(xlCategory).TickLabels
        if (tickLabels.Offset < 500) {
            tickLabels.Offset *= 2
        }
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的数值轴各级别标签之间的距离。*/
function test() {
    let tickLabels = Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).TickLabels
    alert(tickLabels.Offset)
}
```
