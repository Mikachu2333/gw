# ChartCategory.IsFiltered

当用户筛选出序列时，返回 True 。 只读 Boolean。



## 语法

express.**IsFiltered**

express   一个代表 **ChartCategory** 对象的变量。

## 类型

boolean

## 说明


当某个系列从其父 SeriesCollection 中移出时，该系列仍保留在其父级 FullSeriesCollection 中。 当用户重新筛选序列时，该序列将插入到 SeriesCollection 中的原始位置。



## 示例


```JavaScript
/*此示例显示图表工作表 Chart1 第一个图表组的第一个类别是否筛选出序列。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    alert(chart.FullCategoryCollection(1).IsFiltered)
}
```


```JavaScript
/*此示例显示工作表 Sheet1 第一个内嵌图表第一个图表组第二个类别是否筛选出序列。*/
function test() {
    let chart = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    alert(chart.CategoryCollection(2).IsFiltered)
}
```
