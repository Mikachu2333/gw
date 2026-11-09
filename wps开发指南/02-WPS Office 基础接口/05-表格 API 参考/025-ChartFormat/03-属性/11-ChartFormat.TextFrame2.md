# ChartFormat.TextFrame2

返回一个包含指定图表元素文本格式的 **[TextFrame2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/obj)** 对象。只读。



## 语法

express.**TextFrame2**

express   一个代表 **ChartFormat** 对象的变量。

## 类型

TextFrame2

## 示例


```JavaScript
/*此示例设置图表工作表 Chart1 图表区文本框中字体的大小为 10 磅。*/
function test() {
    let chartformat = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartArea.Format
    chartformat.TextFrame2.TextRange.Font.Size = 10
}
```


```JavaScript
/*此示例显示工作表 Sheet1 第一个内嵌图表区的文本框方向是否为水平方向。*/
function test() {
    let chartformat = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartArea.Format
    alert(chartformat.TextFrame2.Orientation == msoTextOrientationHorizontal)
}
```
