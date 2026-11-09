# SparklineGroups.Ungroup

对选定迷你图组中的迷你图取消组合。



## 语法

express.**Ungroup()**

express   一个代表 **SparklineGroups** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例选择区域 A1:A4 并对该区域中的迷你图取消组合。*/
function test() {
    Range("A1:A4").Select()
    Selection.SparklineGroups.Ungroup()
}
```


```JavaScript
/*此示例组合活动工作表上区域 A1:A4 上迷你图组，并取消对 A1 单元格中迷你图组的组合。*/
function test() {
    let sparklineGroups = ActiveSheet.Range("A1:A4").SparklineGroups
    sparklineGroups.Group(Range("A3"))
    Range("A1").SparklineGroups.Ungroup()
}
```
