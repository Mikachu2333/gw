# SparklineGroup.LineWeight

获取或设置迷你图组中迷你图的粗细。可读/写。



## 语法

express.**LineWeight**

express   一个代表 **SparklineGroup** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示活动工作表上单元格 I1 中第一个迷你图组的迷你图的粗细。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("I1").SparklineGroups.Item(1)
    alert(sparklineGroup.LineWeight)
}
```


```JavaScript
/*本示例设置活动工作表上单元格 I1 中第一个迷你图组的迷你图的粗细。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("I1").SparklineGroups.Item(1)
    sparklineGroup.LineWeight = 2
}
```
