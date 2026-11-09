# DataLabel.ShowCategoryName

如果为 **True** ，则在图表中显示数据标签的分类名称。如果为 **False** ，则隐藏分类名称。可读/写 **Boolean** 类型。



## 语法

express.**ShowCategoryName**

express   一个代表 **DataLabel** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动文档上第一张内嵌图表中第一个数据系列的第三个数据标签设置为展示分类名称。*/
function test() {
    let inlineshp = ActiveDocument.InlineShapes(1)
    if (inlineshp.HasChart) {
        inlineshp.Chart.SeriesCollection(1).DataLabels(3).ShowCategoryName = true
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第二个数据系列的第三个数据点的数据标签是否展示分类名称。*/
function test() {
    let point = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Points(3)
    alert(point.DataLabel.ShowCategoryName)
}
```
