# Legend.Width

返回或设置一个 **Double** 值，它代表对象的宽度（以磅为单位）。



## 语法

express.**Width**

express   一个代表 **Legend** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例将第一张工作表上的第一个图表的图例的宽度设置为200磅。*/
function test() {
    Worksheets.Item(1).ChartObjects(1).Chart.Legend.Width = 200
}
```


```JavaScript
/*此示例显示图表工作表 Chart1 上的第一个图表中的图例宽度。*/
function test() {
    alert(Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend.Width)
}
```
