# CategoryCollection.Count

返回一个 **Long** 值，该值代表 **CategoryCollection** 中的对象数（返回图表中可见的类别数）。此为只读属性。



## 语法

express.**Count**

express   一个代表 **CategoryCollection** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*此示例显示图表工作表 Chart1 第一个图表组中可见类别的数量。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    alert(chartgroup.CategoryCollection().Count)
}
```
