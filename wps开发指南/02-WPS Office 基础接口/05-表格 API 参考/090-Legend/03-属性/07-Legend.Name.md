# Legend.Name

返回一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **Legend** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示第一张工作表上的第一个图表中图例的名称。*/
function test() {
    alert(Worksheets.Item(1).ChartObjects(1).Chart.Legend.Name)
}
```


```JavaScript
/*此示例显示图表工作表 Chart1 上的第一个图表中图例的名称。*/
function test() {
    alert(Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend.Name)
}
```
