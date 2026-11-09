# ChartFormat.ThreeD

返回一个 **[ThreeDFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/obj)** 对象，该对象包含指定图表的三维效果格式属性。只读。



## 语法

express.**ThreeD**

express   一个代表 **ChartFormat** 对象的变量。

## 类型

ThreeDFormat

## 示例


```JavaScript
/*此示例显示图表工作表 Chart1 图表区的底部凹凸效果类型是否为 Angle 凹凸效果。*/
function test() {
    let chartformat = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartArea.Format
    alert(chartformat.ThreeD.BevelBottomType == msoBevelAngle)
}
```


```JavaScript
/*此示例设置工作表 Sheet1 第一个内嵌图表区延伸表面为线框材料。*/
function test() {
    let chartformat = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartArea.Format
    chartformat.ThreeD.PresetMaterial = msoMaterialWireFrame
}
```
