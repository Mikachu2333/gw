# DataLabels.ShowCategoryName

如果为 **True** ，则在图表中显示数据标签的分类名称。如果为 **False** ，则隐藏该分类的名称。 **Boolean** 类型，可读写。



## 语法

express.**ShowCategoryName**

express   一个代表 **DataLabels** 对象的变量。

## 类型

boolean

## 说明


以程序方式访问数据标签之前，必须先激活图表，否则将出现运行错误。



## 示例


```JavaScript
/*此示例显示活动工作表中第一个图表上第一个系列的数据标签的分类名称。此示例假定活动工作表上存在图表。*/
function test() {
    Application.ActiveSheet.ChartObjects(1).Activate()
    ActiveChart.SeriesCollection(1).DataLabels().ShowCategoryName = true
}
```


```JavaScript
/*此示例显示图表工作表 Chart1 中图表的第三个系列的数据标签是否展示分类名称。*/
function test() {
    let datalabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(3).DataLabels()
    alert(datalabels.ShowCategoryName)
}
```
