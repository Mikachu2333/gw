# ChartFormat.Shadow

返回一个 **[ShadowFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShadowFormat/obj)** 对象，该对象包含图表元素的阴影格式属性。只读。



## 语法

express.**Shadow**

express   一个代表 **ChartFormat** 对象的变量。

## 类型

ShadowFormat

## 示例


```JavaScript
/*此示例显示工作表 Sheet1 第一个内嵌图表区的底纹的模糊度。*/
function test() {
    let chartformat = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartArea.Format
    alert(chartformat.Shadow.Blur)
}
```


```JavaScript
/*此示例设置图表工作表 Chart1 图表区的阴影类型。*/
function test() {
    let chartformat = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartArea.Format
    chartformat.Shadow.Type = msoShadow8
}
```
