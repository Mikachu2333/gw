# DataLabel.ShowBubbleSize

如果为 **True** ，则在图表中显示数据标签的气泡大小。如果为 **False** ，则隐藏气泡大小。可读/写 **Boolean** 类型。



## 语法

express.**ShowBubbleSize**

express   一个代表 **DataLabel** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动文档中第一张内嵌图表上第一个系列的第一个数据点的数据标签设置为展示气泡大小。*/
function test() {
    let inlineshp = ActiveDocument.InlineShapes(1)
    if (inlineshp.HasChart) {
        let datalabel = inlineshp.Chart.SeriesCollection(1).Points(1).DataLabel
        datalabel.ShowBubbleSize = true
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第一个数据系列的第三个数据点的数据标签是否展示气泡大小。*/
function test() {
    let point = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Points(3)
    alert(point.DataLabel.ShowBubbleSize)
}
```
