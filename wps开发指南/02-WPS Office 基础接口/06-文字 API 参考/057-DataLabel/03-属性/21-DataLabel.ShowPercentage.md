# DataLabel.ShowPercentage

如果为 **True** ，则在图表中显示数据标签的百分比数值。如果为 **False** ，则隐藏该百分比数值。 **Boolean** 类型，可读写。



## 语法

express.**ShowPercentage**

express   一个代表 **DataLabel** 对象的变量。

## 类型

boolean

## 说明


以程序方式访问数据标签之前，必须先激活图表，否则将出现运行错误。



## 示例


```JavaScript
/*此示例显示活动文档中第一个图表的第一个数据系列的第一个数据点关联的数据标签的百分比数值，此示例假定该图表为饼图。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).Points(1).DataLabel.ShowPercentage = true
    }
}
```


```JavaScript
/*此示例显示第一个文档中第一个图表的第一个数据系列的第四个数据点关联的数据标签是否展示百分比数值，此示例假定该图表为饼图。*/
function test() {
    let inlineShape = Documents.Item(1).InlineShapes(1)
    let datalabel = inlineShape.Chart.SeriesCollection(1).Points(4).DataLabel
    alert(datalabel.ShowPercentage)
}
```
