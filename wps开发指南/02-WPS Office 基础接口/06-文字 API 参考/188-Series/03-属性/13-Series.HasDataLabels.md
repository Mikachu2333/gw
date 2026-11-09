# Series.HasDataLabels

如果系列有数据标签，则该属性值为 **True** 。 可读/写 **Boolean** 类型。



## 语法

express.**HasDataLabels**

express   一个代表 **Series** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例启用活动文档中第一个图表的第三个系列的数据标签。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let series = inlineShape.Chart.SeriesCollection(3)
        series.HasDataLabels = true
        series.ApplyDataLabels(xlValue)
    }
}
```


```JavaScript
/*本示例显示选中图表的第一个系列是否具有数据标签*/
function test() {
    alert(Selection.InlineShapes.Item(1).Chart.SeriesCollection(1).HasDataLabels)
}
```
