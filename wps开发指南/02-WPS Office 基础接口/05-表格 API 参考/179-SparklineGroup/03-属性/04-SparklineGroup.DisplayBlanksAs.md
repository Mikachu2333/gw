# SparklineGroup.DisplayBlanksAs

获取或设置空白单元格在迷你图组中的绘制方式。可以是 **[XlDisplayBlanksAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlDisplayBlanksAs)** 常量之一。可读/写。



## 语法

express.**DisplayBlanksAs**

express   一个代表 **SparklineGroup** 对象的变量。

## 类型

XlDisplayBlanksAs

## 示例


```JavaScript
/*本示例显示活动工作表上单元格 I1 中第一个迷你图组的DisplayBlanksAs属性是否为xlNotPlotted。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("I1").SparklineGroups.Item(1)
    alert(sparklineGroup.DisplayBlanksAs == xlNotPlotted)
}
```


```JavaScript
/*本示例设置活动工作表上单元格 I1 中第一个迷你图组的DisplayBlanksAs属性。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("I1").SparklineGroups.Item(1)
    sparklineGroup.DisplayBlanksAs = xlInterpolated
}
```
