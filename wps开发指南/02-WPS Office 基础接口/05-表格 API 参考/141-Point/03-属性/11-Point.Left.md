# Point.Left

返回一个值，该值代表从对象左边缘到图表区左边缘的距离（以磅为单位）。只读。



## 语法

express.**Left**

express   一个代表 **Point** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例显示活动工作表第一个图表上第二个系列第一个数据点的左边缘到图表区左边缘的距离。*/
function test() {
    Application.ActiveSheet.ChartObjects(1).Activate()
    alert(`数据点的左边缘到图表区左边缘的距离为 ${ActiveChart.SeriesCollection(2).Points(1).Left}`)
}
```


```JavaScript
/*此示例判断Chart1中第一个系列第二个数据点的左边缘到图表区左边缘的距离如果超过150磅，则其边框颜色设置为蓝色，反之设置其边框颜色为红色。*/
function test() {
    let point = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).Points(2)
    if (point.Left > 150) {
        point.Format.Line.ForeColor.RGB = RGB(0, 0, 255)
        alert("距离超过150磅已设置其边框颜色为蓝色")
    } else {
        point.Format.Line.ForeColor.RGB = RGB(255, 0, 0)
        alert("距离未超过150磅已设置其边框颜色为红色")
    }
}
```
