# ChartFormat.Shadow

返回图表元素的阴影格式属性。只读 **[ShadowFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShadowFormat/obj)** 对象。



## 语法

express.**Shadow**

express   一个代表 **ChartFormat** 对象的变量。

## 类型

ShadowFormat

## 示例


```JavaScript
/*此示例显示第一个演示文稿的第一张幻灯片中第一张图表的图表区的阴影的模糊度。*/
function test() {
    let chartformat = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartArea.Format
    alert(chartformat.Shadow.Blur)
}
```


```JavaScript
/*此示例设置活动演示文稿的第一张幻灯片中第一张图表的图表区的阴影类型。*/
function test() {
    let chartformat = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartArea.Format
    chartformat.Shadow.Type = msoShadow8
}
```
