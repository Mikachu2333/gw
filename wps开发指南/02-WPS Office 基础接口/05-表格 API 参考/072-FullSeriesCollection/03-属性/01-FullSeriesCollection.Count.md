# FullSeriesCollection.Count

返回一个 **Long** 值，该值代表 **FullSeriesCollection** 对象中的 **Series** 对象数。 此为只读属性。



## 语法

express.**Count**

express   一个代表 **FullSeriesCollection** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 的系列数。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    alert(chart.FullSeriesCollection().Count)
}
```
