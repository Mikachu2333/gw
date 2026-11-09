# SparkAxes 对象

表示一组迷你图的水平轴和垂直轴的设置。

## 说明


使用 **[SparklineGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/obj)** 对象的 **[Axes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroup/member/Axes)** 属性可返回该组迷你图的 **SparkAxes** 对象。


## 示例


```JavaScript
/*本示例显示活动工作表上单元格 H1 中第一个迷你图组是否按右至左顺序在水平轴上绘制点。*/
function test() {
    let shAxis = ActiveSheet.Range("H1").SparklineGroups(1).Axes.Horizontal
    alert(shAxis.RightToLeftPlotOrder)
}
```


```JavaScript
/*本示例设置活动工作表上单元格 H1 中第一个迷你图组的水平轴的颜色。*/
function test() {
    let shAxis = ActiveSheet.Range("H1").SparklineGroups(1).Axes.Horizontal
    shAxis.Axis.Color.ColorIndex = 3
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Horizontal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparkAxes/member/Horizontal) | 返回指定 **[SparkAxes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparkAxes/obj)** 对象的 **[SparkHorizontalAxis](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparkHorizontalAxis/obj)** 对象。只读 |