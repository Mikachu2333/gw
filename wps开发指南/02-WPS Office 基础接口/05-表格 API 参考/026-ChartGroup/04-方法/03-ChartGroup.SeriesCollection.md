# ChartGroup.SeriesCollection

返回一个对象，它代表图表或图表组中的一个系列（ **[Series](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/obj)** 对象）或所有系列的集合（ **[SeriesCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SeriesCollection/obj)** 集合）。



## 语法

express.**SeriesCollection(Index)**

express   一个代表 **ChartGroup** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 数据系列的名称或编号。 |

## 返回值

Object

## 示例


```JavaScript
/*此示例打开图表工作表 Chart1 中第一个数据系列的数据标签。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    chart.SeriesCollection(1).HasDataLabels = true
}
```


```JavaScript
/*此示例设置工作表 Sheet1 第一个内嵌图表中第一个图表组的第二个数据系列的内部颜色为红色。*/
function test() {
    let chartgroup = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.SeriesCollection(2).Interior.Color = RGB(255, 0, 0)
}
```
