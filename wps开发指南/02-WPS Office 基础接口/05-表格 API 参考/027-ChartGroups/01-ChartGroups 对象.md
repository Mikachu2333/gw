# ChartGroups 对象

代表图表中用同一格式绘制的一个或多个数据系列。

## 说明


 **ChartGroups** 集合是指定图表中的所有 **[ChartGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/obj)** 对象的集合。每张图表包含一个或多个图表组，每个图表组包含一个或多个数据系列，每个数据系列包含一个或多个数据点。例如，单张图表可能既包含折线图图表组（其中包含所有用折线图格式绘制的数据系列），也包含条形图图表组（其中包含所有用条形图格式绘制的数据系列）。

使用 **ChartGroups** 方法可返回 **ChartGroups** 集合。


## 示例


```JavaScript
/*本示例显示工作表 Sheet1 中第一个内嵌图表图表组的数量。*/
function test() {
    let  chartgroups = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups()
    alert(chartgroups.Count)
}
```
使用 **ChartGroups** (*index*)（其中 *index* 是图表组的索引号）可以返回单个 **ChartGroup** 对象。



```JavaScript
/*本示例为图表工作表 Chart1 中第一个图表组添加垂直线。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.HasDropLines = true
}
```
如果图表已被激活，可使用 **ActiveChart** ：



```JavaScript
/*本示例激活图表工作表 Chart1 ，并为该表的第一个图表组添加垂直线。*/
function test() {
    Application.Charts.Item("Chart1").Activate()
    Application.ActiveSheet.ChartGroups(1).HasDropLines = true
}
```
因为当特定图表组所用的图表格式更改时，该图表组的索引号可能会更改，所以使用命名图表组快捷方法之一来返回特定的图表组会更加容易。 **PieGroups** 方法返回图表中饼图图表组的集合， **LineGroups** 方法返回图表中折线图图表组的集合，依此类推。这些方法中的每一个都可以与索引号配合使用以返回单个 **ChartGroup** 对象，或不指定索引号而返回 **ChartGroups** 集合。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroups/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroups/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroups/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroups/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroups/member/Parent) | 返回指定对象的父对象。只读。 |