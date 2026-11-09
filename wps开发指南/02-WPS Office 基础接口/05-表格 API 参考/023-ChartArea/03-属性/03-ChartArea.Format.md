# ChartArea.Format

返回 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartFormat/obj)** 对象。只读。



## 语法

express.**Format**

express   一个代表 **ChartArea** 对象的变量。

## 类型

ChartFormat

## 说明


 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartFormat/obj)** 对象包含图表区的线条、填充和效果格式。



## 示例


```JavaScript
/*此示例将图表工作表 Chart1 的前景填充色设置为绿色。*/
function test() {
    let chartarea = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartArea
    chartarea.Format.Fill.ForeColor.RGB = RGB(0, 255, 0)
}
```


```JavaScript
/*此示例将工作表 Sheet1 中第一个内嵌图表的线条设置为蓝色实线。*/
function test() {
    let chartarea = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartArea
    chartarea.Format.Line.DashStyle = msoLineSolid
    chartarea.Format.Line.ForeColor.RGB = RGB(0, 0, 255)
}
```
