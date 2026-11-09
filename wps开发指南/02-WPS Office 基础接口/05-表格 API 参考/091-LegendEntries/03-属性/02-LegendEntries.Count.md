# LegendEntries.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **LegendEntries** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示第一张工作表上的第一个图表中图例的图例项数量。*/
function test() {
    alert(Worksheets.Item(1).ChartObjects(1).Chart.Legend.LegendEntries().Count)
}
```
