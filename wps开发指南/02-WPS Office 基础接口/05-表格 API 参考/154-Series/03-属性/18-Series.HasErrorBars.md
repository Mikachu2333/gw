# Series.HasErrorBars

如果数据系列有误差线，该值为 **True** 。该属性对三维图表无效。 **Boolean** 类型，可读写。



## 语法

express.**HasErrorBars**

express   一个代表 **Series** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例删除 Chart1 中第一个数据系列的误差线。本示例应在其第一个系列有误差线的二维折线图上运行。*/
function test() {
    Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).HasErrorBars = false
}
```


```JavaScript
/*此示例显示活动工作表中第一个图表的第三个数据系列是否有误差线。*/
function test() {
    alert(ActiveSheet.ChartObjects(1).Chart.SeriesCollection(3).HasErrorBars)
}
```
