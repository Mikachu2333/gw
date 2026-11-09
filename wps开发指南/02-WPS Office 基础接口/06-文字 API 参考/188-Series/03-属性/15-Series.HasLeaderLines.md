# Series.HasLeaderLines

如果系列有引导线，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasLeaderLines**

express   一个代表 **Series** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于饼图。



## 示例


```JavaScript
/*以下示例向饼图上的第一个系列添加数据标签和引导线。如果看不到引导线，可从饼图中手动拖出其中一个数据标签以便显示引导线。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let series = inlineShape.Chart.SeriesCollection(1)
        series.HasDataLabels = true
        series.DataLabels.Position = xlLabelPositionBestFit
        series.HasLeaderLines = true
    }
}
```


```JavaScript
/*本示例显示选中饼图的第一个系列是否具有引导线。*/
function test() {
    let series = Selection.InlineShapes.Item(1).Chart.SeriesCollection(1)
    alert(series.HasLeaderLines)
}
```
