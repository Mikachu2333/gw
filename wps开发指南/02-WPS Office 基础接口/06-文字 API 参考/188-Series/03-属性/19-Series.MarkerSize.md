# Series.MarkerSize

以磅为单位返回或设置数据标记的大小。可读/写 **Long** 类型。



## 语法

express.**MarkerSize**

express   一个代表 **Series** 对象的变量。

## 类型

number（int4 精度）

## 说明


该属性的值可以介于 2 到 72 之间。



## 示例


```JavaScript
/*本示例设置活动文档中第一个图表的第一个系列上所有数据标记的大小。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).MarkerSize = 10
    }
}
```


```JavaScript
/*本示例显示选中图表的第二个数据系列数据标记的大小。*/
function test() {
    let inlineShape = Selection.InlineShapes.Item(1)
    alert(inlineShape.Chart.SeriesCollection(2).MarkerSize + "磅")
}
```
