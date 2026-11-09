# SparkHorizontalAxis.RightToLeftPlotOrder

返回或设置是否按右至左顺序在水平轴上绘制点。可读/写。



## 语法

express.**RightToLeftPlotOrder**

express   一个代表 **SparkHorizontalAxis** 对象的变量。

## 类型

**Boolean** 

## 说明


将 **RightToLeftPlotOrder** 属性设置为 **True** 将按右至左顺序在水平轴上绘制值。



## 示例


```JavaScript
/*本示例显示活动工作表上单元格 H1 中第一个迷你图组是否按右至左顺序在水平轴上绘制点。*/
function test() {
    let shAxis = ActiveSheet.Range("H1").SparklineGroups(1).Axes.Horizontal
    alert(shAxis.RightToLeftPlotOrder)
}
```


```JavaScript
/*本示例将活动工作表上单元格 H1 中第一个迷你图组的水平轴设置为可见，并将该水平轴设置为按右至左顺序绘制点。*/
function test() {
    let shAxis = ActiveSheet.Range("H1").SparklineGroups(1).Axes.Horizontal
    shAxis.Axis.Visible = true
    shAxis.RightToLeftPlotOrder = true
}
```
