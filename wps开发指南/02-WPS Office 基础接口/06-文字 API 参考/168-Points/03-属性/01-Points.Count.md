# Points.Count

返回集合中对象的数目。只读 **Long** 类型。



## 语法

express.**Count**

express   一个代表 **Points** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档中第一个图表的第二个数据系列的数据点的数量。*/
function test() {
    let series = Application.ActiveDocument.InlineShapes(1).Chart.SeriesCollection(2)
    alert(series.Points().Count)
}
```
