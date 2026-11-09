# Chart.ChartObjects

返回一个对象，它代表工作表上的一个嵌入式图表（ **[ChartObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/obj)** 对象）或所有嵌入式图表的集合（ **[ChartObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/obj)** 对象）。



## 语法

express.**ChartObjects(Index)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 图表的名称或索引。此参数可以是一个数组，用于指定多个图表。 |

## 返回值

Object

## 说明


该方法不等同于 **[Charts](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Charts)** 属性，它返回嵌入式图表，而 **Charts** 属性返回图表工作表。使用 **[Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Chart)** 属性可返回嵌入式图表的 **Chart** 对象。



## 示例


```JavaScript
/*本示例向图表工作表 Chart1 上的第一个嵌入式图表中添加标题。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    chart.HasTitle = true
    chart.ChartTitle.Text = "1995 Rainfall Totals by Month"
}
```


```JavaScript
/*本示例在工作表 Sheet1 上的第一个嵌入式图表中新建一个系列，新系列的数据源为 Sheet1 的 B1:B10 区域。*/
function test() {
    Application.Worksheets.Item("Sheet1").ChartObjects(1).Activate()
    Application.ActiveChart.SeriesCollection().Add(Worksheets.Item("Sheet1").Range("B1:B10"))
}
```


```JavaScript
/*本示例清除工作表 Sheet1 上第一个嵌入式图表的格式设置。*/
function test() {
    Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartArea.ClearFormats()
}
```
