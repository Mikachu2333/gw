# Chart.ChartArea

返回一个 **[ChartArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartArea/obj)** 对象，该对象表示图表的整个图表区。只读。



## 语法

express.**ChartArea**

express   一个代表 **Chart** 对象的变量。

## 类型

ChartArea

## 示例


```JavaScript
/*本示例将图表工作表 Chart1 的图表区域内部颜色设置为红色，并将其边框颜色设置为蓝色。*/
function test() {
    let area = Application.Charts.Item("Chart1").ChartArea
    area.Interior.ColorIndex = 3
    area.Border.ColorIndex = 5
}
```


```JavaScript
/*本示例显示图表工作表 Chart1 的图表区域是否有阴影。*/
function test() {
    alert(Application.Charts.Item("Chart1").ChartArea.Shadow)
}
```
