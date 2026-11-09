# ChartFormat.Glow

返回图表元素的发光格式属性。只读 **[GlowFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/GlowFormat/obj)** 对象。



## 语法

express.**Glow**

express   一个代表 **ChartFormat** 对象的变量。

## 类型

GlowFormat

## 说明


发光效果为图形添加了色彩鲜明的彩色边缘。



## 示例


```JavaScript
/*此示例显示活动演示文稿的第一张幻灯片的第一个图表的图表区的发光的透明度。*/
function test() {
    let chartformat = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartArea.Format
    alert(chartformat.Glow.Transparency)
}
```


```JavaScript
/*此示例设置第一个演示文稿的第一张幻灯片的第一个图表的图表区的发光效果的半径值为 1 磅。*/
function test() {
    let chartformat = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartArea.Format
    chartformat.Glow.Radius = 1
}
```
