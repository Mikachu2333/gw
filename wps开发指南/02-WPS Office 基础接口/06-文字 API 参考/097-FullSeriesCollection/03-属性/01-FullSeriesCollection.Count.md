# FullSeriesCollection.Count

返回一个 **Long** 类型的值，表示集合中的完整序列的数目。只读。



## 语法

express.**Count**

express   一个代表 **FullSeriesCollection** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档中第一个内嵌图表完整序列的数目。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes(1)
    alert(inlineShape.Chart.FullSeriesCollection().Count)
}
```
