# ChartGroups.Count

返回集合中对象的数目。只读 **Long** 类型。



## 语法

express.**Count**

express   一个代表 **ChartGroups** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个内嵌图表中图表组的数量。*/
function test() {
    let chartgroups = Application.ActiveDocument.InlineShapes(1).Chart.ChartGroups()
    alert(chartgroups.Count)
}
```
