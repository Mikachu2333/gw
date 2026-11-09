# DataLabel.ShowValue

如果为 **True** ，则显示指定图表的数据标签值。如果为 **False** ，则隐藏这些值。可读/写 **Boolean** 类型。



## 语法

express.**ShowValue**

express   一个代表 **DataLabel** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动文档中第一张内嵌图表上第二个数据系列的第一个数据标签的值设置为可见。*/
function test() {
    const inlineShapes = ActiveDocument.InlineShapes.Item(1)
    if (inlineShapes.HasChart) {
        inlineShapes.Chart.SeriesCollection(2).DataLabels(1).ShowValue = true
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第二个数据系列的第三个数据点的数据标签是否展示值。*/
function test() {
    let point = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Points(3)
    alert(point.DataLabel.ShowValue)
}
```
