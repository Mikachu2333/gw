# SparklineGroups.ClearGroups

清除选定的迷你图组。



## 语法

express.**ClearGroups()**

express   一个代表 **SparklineGroups** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*此示例清除活动单元格上迷你图组。*/
function test() {
    ActiveCell.SparklineGroups.ClearGroups()
}
```


```JavaScript
/*此示例清除活动工作表上单元格 H1 中迷你图组，并显示该区域上迷你图组的数量。*/
function test() {
    let sparklineGroups = ActiveSheet.Range("H1").SparklineGroups
    sparklineGroups.ClearGroups()
    alert(sparklineGroups.Count)
}
```
