# CategoryCollection.Count

返回一个 **Long** 类型的值，该值代表集合中类别的数目。只读。



## 语法

express.**Count**

express   一个代表 **CategoryCollection** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示第一个文档上第一个形状中的图表的第一个图表组的可见类别的数量。*/
function test() {
    let chartGroup = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.CategoryCollection().Count)
}
```
