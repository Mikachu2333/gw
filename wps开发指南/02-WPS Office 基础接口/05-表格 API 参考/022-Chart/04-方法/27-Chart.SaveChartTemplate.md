# Chart.SaveChartTemplate

向可用图表模板的列表添加自定义图表模板。



## 语法

express.**SaveChartTemplate(Filename)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Filename | 必选 | string | 图表模板的名称。 |

## 返回值

void

## 说明


默认情况下，此方法将活动图表保存到用户的图表模板库中。如果指定了 UNC 或 URL，则图表将保存到指定位置。



## 示例


```JavaScript
/*此示例基于图表工作表 Chart1 添加一个新图表模板。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    chart.SaveChartTemplate("Presentation Chart")
}
```


```JavaScript
/*此示例基于工作表 Sheet1 第一张内嵌图表添加一个新图表模板。*/
function test() {
    let chart = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart
    chart.SaveChartTemplate("chart1")
}
```
