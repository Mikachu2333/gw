# DataLabels.ShowValue

如果为 **True** ，则显示指定图表的数据标签值。如果为 **False** ，则隐藏这些值。可读/写 **Boolean** 类型。



## 语法

express.**ShowValue**

express   一个代表 **DataLabels** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例使活动文档中第一个图表上第一个系列展示图表的数据标签值。*/
function test() {
    let inlineshape = ActiveDocument.InlineShapes(1)
    if (inlineshape.HasChart) {
        ActiveDocument.InlineShapes(1).Chart.SeriesCollection(1).DataLabels().ShowValue = true
    }
}
```


```JavaScript
/*本示例使第一个文档中第一个图表上的第二个数据系列的数据标签的值设置为不可见。*/
function test() {
    let datalabels = Application.Documents.Item(1).InlineShapes(1).Chart.SeriesCollection(2).DataLabels()
    datalabels.ShowValue = false
}
```
