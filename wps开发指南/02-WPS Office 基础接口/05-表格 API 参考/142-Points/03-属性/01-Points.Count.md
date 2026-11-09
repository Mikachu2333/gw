# Points.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **Points** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*此示例显示第一张工作表上第一个图表的第二个数据系列中数据点的数量。*/
function test() {
    let series = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(2)
    alert(series.Points().Count)
}
```
