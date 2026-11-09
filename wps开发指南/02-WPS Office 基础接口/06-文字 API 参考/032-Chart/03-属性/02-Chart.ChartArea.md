# Chart.ChartArea

返回图表的整个图表区。只读 **[ChartArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartArea/obj)** 对象。



## 语法

express.**ChartArea**

express   一个代表 **Chart** 对象的变量。

## 类型

ChartArea

## 示例


```JavaScript
/*本示例将活动文档第一个图表区域的前景填充色设置为红色。*/
function test() {
    let chartArea = ActiveDocument.InlineShapes(1).Chart.ChartArea
    chartArea.Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例显示活动文档第一个图表区域的高度和宽度。*/
function test() {
    let chartArea = ActiveDocument.InlineShapes(1).Chart.ChartArea
    alert(`高：${chartArea.Height} 磅 \n宽：${chartArea.Width} 磅`)
}
```
