# SparkColor.Color

返回一个 **[FormatColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/obj)** 对象，可使用该对象来设置迷你图中点的标记色。只读



## 语法

express.**Color**

express   一个代表 **SparkColor** 对象的变量。

## 类型

**FormatColor** 

## 示例


```JavaScript
/*本示例设置活动工作表上区域 A1:A4 中第一个迷你图组的水平轴的颜色。*/
function test() {
    let sparkColor = ActiveSheet.Range("A1:A4").SparklineGroups.Item(1).Axes.Horizontal.Axis
    sparkColor.Color.ColorIndex = 5
}
```


```JavaScript
/*本示例判断如果活动工作表上区域 A1:A4 中第一个迷你图组的迷你图的第一个数据点可见，则将该数据点设置为黑色。*/
function test() {
    let sparkColor = ActiveSheet.Range("A1:A4").SparklineGroups.Item(1).Points.Firstpoint
    if (sparkColor.Visible) {
        sparkColor.Color.ColorIndex = 1
    }
}
```
