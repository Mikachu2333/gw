# SparkHorizontalAxis 对象

表示一组迷你图的水平轴的设置。

## 说明


使用 **[SparkAxes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparkAxes/obj)** 对象的 **[Horizontal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparkAxes/member/Horizontal)** 属性可返回迷你图组的 **SparkHorizontalAxis** 对象。水平轴只有在迷你图数据在垂直轴上同时有负值和正值的情况下才会显示。


## 示例


```JavaScript
/*本示例将活动工作表上单元格 H1 中第一个迷你图组的水平轴设置为可见，并设置该水平轴的颜色。*/
function test() {
    let shAxis = ActiveSheet.Range("H1").SparklineGroups(1).Axes.Horizontal
    shAxis.Axis.Visible = true
    shAxis.Axis.Color.ColorIndex = 3
}
```


```JavaScript
/*本示例判断活动工作表上单元格 H1 中第一个迷你图组的水平轴绘制点的顺序，并通知用户。*/
function test() {
    let shAxis = ActiveSheet.Range("H1").SparklineGroups(1).Axes.Horizontal
    if (shAxis.RightToLeftPlotOrder) {
        alert("按右至左顺序在水平轴上绘制点")
    } else {
        alert("按左至右顺序在水平轴上绘制点")
    }
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Axis](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparkHorizontalAxis/member/Axis) | 返回一个 **[SparkColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparkColor/obj)** 对象，该对象指定迷你图水平轴的颜色。只读。 |
| [IsDateAxis](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparkHorizontalAxis/member/IsDateAxis) | 返回迷你图的水平轴是否基于日期值。只读。 |
| [RightToLeftPlotOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparkHorizontalAxis/member/RightToLeftPlotOrder) | 返回或设置是否按右至左顺序在水平轴上绘制点。可读/写。 |