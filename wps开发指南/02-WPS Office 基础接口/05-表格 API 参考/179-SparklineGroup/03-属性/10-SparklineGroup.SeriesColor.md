# SparklineGroup.SeriesColor

返回一个代表迷你图组的主要系列颜色的 **[FormatColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/obj)** 对象。只读。



## 语法

express.**SeriesColor**

express   一个代表 **SparklineGroup** 对象的变量。

## 类型

FormatColor

## 示例


```JavaScript
/*本示例将活动工作表上单元格 J1 中第一个迷你图组的主系列颜色设置为红色。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("J1").SparklineGroups.Item(1)
    sparklineGroup.SeriesColor.ColorIndex = 3
}
```


```JavaScript
/*本示例设置活动工作表上单元格 J1 中第一个迷你图组的主系列颜色。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("J1").SparklineGroups.Item(1)
    sparklineGroup.SeriesColor.Color = RGB(255, 255, 0)
}
```
