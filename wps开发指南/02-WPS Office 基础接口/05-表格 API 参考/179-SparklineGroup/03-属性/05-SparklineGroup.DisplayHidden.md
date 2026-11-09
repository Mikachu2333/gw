# SparklineGroup.DisplayHidden

指定是否在迷你图组中绘制隐藏单元格。可读/写。



## 语法

express.**DisplayHidden**

express   一个代表 **SparklineGroup** 对象的变量。

## 类型

boolean

## 说明


如果隐藏单元格在迷你图组中显示，则为 **True** 。



## 示例


```JavaScript
/*本示例将活动工作表上单元格 I1 中第一个迷你图组设置为绘制隐藏单元格。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("I1").SparklineGroups.Item(1)
    sparklineGroup.DisplayHidden = true
}
```


```JavaScript
/*本示例显示单元格 I1 中第一个迷你图组是否绘制隐藏单元格。*/
function test() {
    alert(Range("I1").SparklineGroups.Item(1).DisplayHidden)
}
```
