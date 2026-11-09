# LegendEntries 对象

指定的图表图例中所有 **LegendEntry** 对象的集合。

## 说明


每个图例项都有两部分：一部分是该项的文本，它是与该图例项相关联的数据系列或趋势线的名称；另一部分是项标志，它在图表中以直观的方式将图例项以及与之相关联的数据系列或趋势线链接起来。项标志及其相关系列或趋势线的格式属性包含在 **LegendKey** 对象中。


## 示例


```JavaScript
/*下例在嵌入式图表一中的图例项集合中循环，并更改这些图例项的字体颜色。*/
function test() {
    let lgd = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Legend
    for (let i = 1; i <= lgd.LegendEntries().Count; i++) {
        lgd.LegendEntries(i).Font.ColorIndex = 5
    }
}
```
使用 **LegendEntries** ( *index*)（其中 *index* 是图例项索引号）可返回一个 **LegendEntry** 对象。不能按名称返回图例项。

图例项的编号代表图例项在图例中的位置。`LegendEntries(1)` 位于图例的顶部；`LegendEntries(LegendEntries.Count)` 位于图例的底部。



```JavaScript
/*下例将嵌入的第一个图表中图例顶部的图例项（这通常是第一个数据系列的图例）的文字字体设置为斜体。*/
function test() {
    Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Legend.LegendEntries(1).Font.Italic = true
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendEntries/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendEntries/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendEntries/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendEntries/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendEntries/member/Parent) | 返回指定对象的父对象。只读。 |