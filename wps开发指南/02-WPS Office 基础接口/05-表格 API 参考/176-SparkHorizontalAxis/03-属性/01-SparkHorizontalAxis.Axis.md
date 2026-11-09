# SparkHorizontalAxis.Axis

返回一个 **[SparkColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparkColor/obj)** 对象，该对象指定迷你图水平轴的颜色。只读。



## 语法

express.**Axis**

express   一个代表 **SparkHorizontalAxis** 对象的变量。

## 类型

SparkColor

## 示例


```JavaScript
/*本示例设置活动工作表上单元格 H1 中第一个迷你图组的水平轴的颜色。*/
function test() {
    let shAxis = ActiveSheet.Range("H1").SparklineGroups(1).Axes.Horizontal
    shAxis.Axis.Color.ColorIndex = 3
}
```


```JavaScript
/*本示例将活动工作表上单元格 H1 中第一个迷你图组的水平轴的设置为不可见。*/
function test() {
    let shAxis = ActiveSheet.Range("H1").SparklineGroups(1).Axes.Horizontal
    shAxis.Axis.Visible = false
}
```
