# SparklineGroup.Points

返回迷你图组的关联 **[SparkPoints](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparkPoints/obj)** 对象。只读。



## 语法

express.**Points**

express   一个代表 **SparklineGroup** 对象的变量。

## 类型

SparkPoints

## 示例


```JavaScript
/*本示例将活动工作表上单元格 I2 中第一个迷你图组的迷你图的高点设置为可见。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("I2").SparklineGroups.Item(1)
    sparklineGroup.Points.Highpoint.Visible = true
}
```


```JavaScript
/*本示例设置活动工作表上单元格 I2 中第一个迷你图组的迷你图上第一个数据点的颜色。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("I2").SparklineGroups.Item(1)
    sparklineGroup.Points.Firstpoint.Color.ColorIndex = 4
}
```
