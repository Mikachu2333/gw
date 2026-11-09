# Legend.Left

返回或设置 **Double** 值，它代表从对象左边缘到工作表的 A 列左边缘或图表上的图表区左边缘的距离（以磅为单位）。



## 语法

express.**Left**

express   一个代表 **Legend** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例将第一张工作表上的第一个图表的图例的左侧边缘位置设置为 10 磅。*/
function test() {
    Worksheets.Item(1).ChartObjects(1).Chart.Legend.Left = 10
}
```


```JavaScript
/*此示例显示图表工作表 Chart1 上的第一个图表中图例的左侧边缘位置。*/
function test() {
    alert(Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend.Left)
}
```
