# SparklineGroup.Type

获取或设置组的迷你图的类型。可读/写。



## 语法

express.**Type**

express   一个代表 **SparklineGroup** 对象的变量。

## 类型

XlSparkType

## 示例


```JavaScript
/*本示例设置活动工作表上单元格 J1 中第一个迷你图组的迷你图的类型。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("J1").SparklineGroups.Item(1)
    sparklineGroup.Type = xlSparkColumn
}
```


```JavaScript
/*本示例显示活动工作表上单元格 J1 中第一个迷你图组的迷你图的类型是否为折线图迷你图。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("J1").SparklineGroups.Item(1)
    alert(sparklineGroup.Type == xlSparkLine)
}
```
