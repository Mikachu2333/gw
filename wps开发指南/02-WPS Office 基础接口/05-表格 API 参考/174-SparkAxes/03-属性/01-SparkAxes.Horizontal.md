# SparkAxes.Horizontal

返回指定 **[SparkAxes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparkAxes/obj)** 对象的 **[SparkHorizontalAxis](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparkHorizontalAxis/obj)** 对象。只读



## 语法

express.**Horizontal**

express   一个代表 **SparkAxes** 对象的变量。

## 类型

**SparkHorizontalAxis** 

## 示例


```JavaScript
/*本示例将活动工作表上单元格 H1 中第一个迷你图组设置为按右至左顺序在水平轴上绘制点。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("H1").SparklineGroups(1)
    sparklineGroup.Axes.Horizontal.RightToLeftPlotOrder = true
}
```


```JavaScript
/*本示例显示活动工作表上单元格 H1 中第一个迷你图组的迷你图的水平轴是否基于日期值。*/
function test() {
    let shAxis = ActiveSheet.Range("H1").SparklineGroups(1).Axes.Horizontal
    alert(shAxis.IsDateAxis)
}
```
