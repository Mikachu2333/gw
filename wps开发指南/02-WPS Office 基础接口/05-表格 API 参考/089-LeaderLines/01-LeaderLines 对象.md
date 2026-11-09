# LeaderLines 对象

代表图表的引导线。引导线将数据标签连接到数据点。

## 说明


该对象不是一个集合；没有表示单个引导线的对象。

此对象只适用于饼图。

使用 **LeaderLines** 属性可返回 **LeaderLines** 对象。


## 示例


```JavaScript
/*下例图表一上的数据系列一添加数据标签和蓝色引导线。如果看不到引导线，则该示例代码将失败。在这种情况下，可从饼图中手动拖出其中一个数据标签以便显示引导线。*/
function test() {
    let chartObjects2 = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(1)
    chartObjects2.HasDataLabels = true
    chartObjects2.DataLabels.Position = xlLabelPositionBestFit
    chartObjects2.HasLeaderLines = true
    chartObjects2.LeaderLines.Border.ColorIndex = 5
}
```


```JavaScript
/*此示例显示图表工作表 Chart1 上的第三个数据系列的引导线粗细。*/
function test() {
    let series3 = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(3)
    alert(series3.LeaderLines.Border.Weight)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LeaderLines/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LeaderLines/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LeaderLines/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LeaderLines/member/Border) | 返回一个 **Border** 对象，它代表对象的边框。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LeaderLines/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LeaderLines/member/Format) | 返回 **ChartFormat** 对象。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LeaderLines/member/Parent) | 返回指定对象的父对象。只读。 |