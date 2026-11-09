# ChartGroups 对象

代表图表中用同一格式绘制的一个或多个系列。

## 说明


 **ChartGroups** 集合是指定图表中所有 **[ChartGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartGroup/obj)** 对象的集合。每张图表包含一个或多个图表组，每个图表组包含一个或多个系列，每个系列包含一个或多个数据点。例如，单张图表可以既包含折线图图表组（其中包含用折线图格式绘制的所有系列），又包含条形图图表组（其中包含用条形图格式绘制的所有系列）。

可以使用 **[ChartGroups](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/ChartGroups)** 属性返回 **ChartGroups** 集合。


## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表中图表组的数量。*/
function test() {
    let chartgroups = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartGroups()
    alert(chartgroups.Count)
}
```
可以使用 **ChartGroups** (_index_)（其中 _Index_ 是图表组的索引号）返回单个 **ChartGroup** 对象。



```JavaScript
/*本示例为活动演示文稿的第一张幻灯片中第一个图表上的第一个图表组启用垂直线。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.ChartGroups().Item(1).HasDropLines = true
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartGroups/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartGroups/member/Count) | 返回集合中对象的数目。只读 **Long** 类型。 |