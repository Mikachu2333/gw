# Legend.Top

返回或设置一个 **Double** 值，它代表从对象的上边缘到工作表第一行顶部或图表上的图表区顶部的距离（以磅为单位）。



## 语法

express.**Top**

express   一个代表 **Legend** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例将第一张工作表上的第一个图表的图例的顶部边缘位置设置为 30 磅。*/
function test() {
    Worksheets.Item(1).ChartObjects(1).Chart.Legend.Top = 30
}
```


```JavaScript
/*此示例显示图表工作表 Chart1 上图例的顶部边缘位置。*/
function test() {
    alert(Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend.Top)
}
```
