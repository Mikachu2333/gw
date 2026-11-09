# Trendlines 对象

指定的数据系列中所有 **Trendline** 对象的集合。

## 说明


每一个 **Trendline** 对象都代表图表中的趋势线。趋势线显示系列中数据的趋势或方向。


## 示例


```JavaScript
/*以下示例显示 Chart1 上第一系列的趋势线数。*/
function test() {
    alert(Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).Trendlines().Count)
}
```


```JavaScript
/*下例给 Sheet1 中嵌入式图表一中的第一个系列添加线性趋势线。*/
function test() {
    Worksheets("Sheet1").ChartObjects(1).Chart.SeriesCollection(1).Trendlines().Add(xlLinear, null, null, null, null, null, null, null, "Linear Trend")
}
```


```JavaScript
/*下例更改工作表一上嵌入式图表一中第一个系列的趋势线类型。如果该系列没有趋势线，本示例将失败。*/
function test() {
    Worksheets(1).ChartObjects(1).Chart.SeriesCollection(1).Trendlines(1).Type = xlMovingAvg
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendlines/member/Add) | 创建新的趋势线。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendlines/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendlines/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Trendlines/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |