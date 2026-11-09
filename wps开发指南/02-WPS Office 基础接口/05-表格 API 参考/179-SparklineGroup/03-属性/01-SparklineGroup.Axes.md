# SparklineGroup.Axes

返回关联的 **[SparkAxes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparkAxes/obj)** 对象。只读。



## 语法

express.**Axes**

express   一个代表 **SparklineGroup** 对象的变量。

## 类型

SparkAxes

## 示例


```JavaScript
/*本示例显示单元格 I1 中第一个迷你图组垂直轴的MinScaleType属性是否为xlSparkScaleGroup。*/
function test() {
    let sparklineGroup = Range("I1").SparklineGroups.Item(1)
    alert(sparklineGroup.Axes.Vertical.MinScaleType == xlSparkScaleGroup)
}
```


```JavaScript
/*本示例将活动工作表上单元格 I1 中第一个迷你图组设置为按右至左顺序在水平轴上绘制点。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("I1").SparklineGroups(1)
    sparklineGroup.Axes.Horizontal.RightToLeftPlotOrder = true
}
```
