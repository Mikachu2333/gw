# SeriesCollection.Count

返回集合中对象的数目。只读 **Long** 类型。



## 语法

express.**Count**

express   一个代表 **SeriesCollection** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档中第一个图表的系列数目。*/
function test() {
    let chart = ActiveDocument.InlineShapes.Item(1).Chart
    alert("活动文档中第一个图表的系列数目为：" + chart.SeriesCollection().Count)
}
```
