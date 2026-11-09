# ChartFormat.ThreeD

返回指定图表的三维效果格式属性。只读 **[ThreeDFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/obj)** 对象。



## 语法

express.**ThreeD**

express   一个代表 **ChartFormat** 对象的变量。

## 类型

ThreeDFormat

## 示例


```JavaScript
/*此示例显示活动演示文稿的第一张幻灯片中第一张图表的图表区的底部凹凸效果类型是否为msoBevelAngle。*/
function test() {
    let chartFormat = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartArea.Format
    alert(chartFormat.ThreeD.BevelBottomType == msoBevelAngle)
}
```


```JavaScript
/*此示例显示第一个演示文稿的第一张幻灯片中第一张图表的图表区的照明效果是否为msoLightRigFlood。*/
function test() {
    let chartFormat = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartArea.Format
    alert(chartFormat.ThreeD.PresetLighting == msoLightRigFlood)
}
```
