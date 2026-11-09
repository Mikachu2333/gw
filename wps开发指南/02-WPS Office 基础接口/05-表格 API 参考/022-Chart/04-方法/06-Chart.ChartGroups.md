# Chart.ChartGroups

返回一个对象，该对象表示图表中单个图表组（ **[ChartGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/obj)** 对象）或所有图表组的集合（ **[ChartGroups](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroups/obj)** 对象）。返回的集合中包括每种类型的图表组。



## 语法

express.**ChartGroups(Index)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 图表组编号。 |

## 返回值

Object

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中第一个图表组的涨跌柱线，并对其颜色进行设置。该示例应在包含两个序列的 2D 折线图上运行，这些序列与一个或多个数据点相交。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.HasUpDownBars  = true
    chartgroup.DownBars.Interior.ColorIndex = 3
    chartgroup.UpBars.Interior.ColorIndex = 5
}
```


```JavaScript
/*此示例为工作表 Sheet1 中第一个内嵌图表的第一个图表组添加垂直线。*/
function test() {
    let chart = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart
    chart.ChartGroups(1).HasDropLines = true
}
```
