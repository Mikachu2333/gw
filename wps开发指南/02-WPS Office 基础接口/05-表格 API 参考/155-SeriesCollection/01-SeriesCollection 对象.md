# SeriesCollection 对象

指定的图表或图表组中所有 **Series** 对象的集合。

## 说明


使用 **SeriesCollection** 方法可返回 **SeriesCollection** 集合。


## 示例


```JavaScript
/*此示例显示第一张工作表中第一个图表的系列数量。*/
function test() {
    alert(Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection().Count)
}
```


```JavaScript
/*此示例将单元格 A1:A19 中的数据添加到名为 Chart1 的图表工作表上的新系列。*/
function test() {
    Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection().Add(Worksheets.Item("Sheet1").Range("A1:A19"))
}
```


```JavaScript
/*此示例设置工作表 Sheet1 上嵌入的第一个图表中第一个数据系列的内部颜色。*/
function test() {
    Worksheets("Sheet1").ChartObjects(1).Chart.SeriesCollection(1).Interior.Color = RGB(255, 0, 0)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SeriesCollection/member/Item) | 从集合中返回一个对象。 |
| [NewSeries](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SeriesCollection/member/NewSeries) | 创建新系列。返回代表该新系列的 **Series** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SeriesCollection/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SeriesCollection/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SeriesCollection/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SeriesCollection/member/Parent) | 返回指定对象的父对象。只读。 |