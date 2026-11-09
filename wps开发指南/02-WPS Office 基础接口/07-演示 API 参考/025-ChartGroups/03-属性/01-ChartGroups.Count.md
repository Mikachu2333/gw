# ChartGroups.Count

返回集合中对象的数目。只读 **Long** 类型。



## 语法

express.**Count**

express   一个代表 **ChartGroups** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表中图表组的数量。*/
function test() {
    let chartgroups = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartGroups()
    alert(chartgroups.Count)
}
```
