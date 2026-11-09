# Trendlines 对象

代表指定系列的所有 **[Trendline](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/obj)** 对象的集合。

## 说明


每一个 **Trendline** 对象都代表图表中的趋势线。趋势线显示系列中数据的趋势或方向。

可以使用 **[Trendlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Series/member/Trendlines)** 方法返回 **Trendlines** 集合。


## 示例


```JavaScript
/*本示例显示活动文档中第一个内嵌图表的第一个数据系列的趋势线数目。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        alert(inlineShape.Chart.SeriesCollection(1).Trendlines().Count)
    }
}
```
可以使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendlines/member/Add)** 方法新建趋势线并将其添加到系列中。



```JavaScript
/*本示例向活动文档中第一个内嵌图表的第一个数据系列添加线性趋势线。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let series = inlineShape.Chart.SeriesCollection(1)
        series.Trendlines().Add(xlLinear, null, null, null, null, null, null, null, "Linear Trend")
    }
}
```
可以使用 **[Trendlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Series/member/Trendlines)** (_index_)（其中 _Index_ 是趋势线的索引号）返回单个 **TrendLine** 对象。

索引号指出趋势线添加到系列中的顺序。`Trendlines(1)` 是第一个添加到系列中的趋势线，而 `Trendlines(Trendlines.Count)` 是最后一个。



```JavaScript
/*本示例更改活动文档上第一个内嵌图表的第一个数据系列上的第一个趋势线的类型。如果该系列没有趋势线，本示例将失败。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).Trendlines().Item(1).Type = xlMovingAvg
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendlines/member/Add) | 创建新的趋势线。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendlines/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendlines/member/Count) | 返回集合中对象的数目。只读 **Long** 类型。 |