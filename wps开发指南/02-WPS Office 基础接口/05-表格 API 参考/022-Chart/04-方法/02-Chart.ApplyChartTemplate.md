# Chart.ApplyChartTemplate

将标准图表类型或自定义图表类型应用于图表。



## 语法

express.**ApplyChartTemplate(Filename)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Filename | 必选 | string | 图表模板的文件名。 |

## 返回值

void

## 说明


此方法不支持采用原图表或组合图的常量。



## 示例


```JavaScript
/*本示例将图表工作表 Chart1 图表类型修改为自定义图表。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    chart.ApplyChartTemplate("D:/图表1.crtx")
}
```


```JavaScript
/*本示例将工作表 Sheet1 中第一个内嵌图表的图表类型修改为自定义图表。*/
function test() {
    let chart = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart
    chart.ApplyChartTemplate("D:\\crtx\\chart1.crtx")
}
```
