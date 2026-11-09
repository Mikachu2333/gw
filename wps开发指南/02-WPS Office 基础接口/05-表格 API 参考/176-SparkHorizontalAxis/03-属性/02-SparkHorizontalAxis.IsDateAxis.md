# SparkHorizontalAxis.IsDateAxis

返回迷你图的水平轴是否基于日期值。只读。



## 语法

express.**IsDateAxis**

express   一个代表 **SparkHorizontalAxis** 对象的变量。

## 类型

**Boolean** 

## 说明


如果水平轴是基于日期值，则为 **True** ；否则为 **False** 。



## 示例


```JavaScript
/*本示例显示活动工作表上单元格 H1 中第一个迷你图组的水平轴是否基于日期值。*/
function test() {
    let shAxis = ActiveSheet.Range("H1").SparklineGroups(1).Axes.Horizontal
    alert(shAxis.IsDateAxis)
}
```


```JavaScript
/*本示例判断如果活动工作表上单元格 H1 中第一个迷你图组的水平轴可见，则显示该水平轴是否基于日期值。*/
function test() {
    let shAxis = ActiveSheet.Range("H1").SparklineGroups(1).Axes.Horizontal
    if (shAxis.Axis.Visible) {
        alert(shAxis.IsDateAxis)
    }
}
```
