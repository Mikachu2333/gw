# SparklineGroups.Clear

清除选定的迷你图。



## 语法

express.**Clear()**

express   一个代表 **SparklineGroups** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*此示例清除活动工作表上区域 A1:A2 上迷你图组的迷你图。*/
function test() {
    let sparklineGroups = ActiveSheet.Range("A1:A2").SparklineGroups
    sparklineGroups.Clear()
}
```


```JavaScript
/*此示例清除第一张工作表上区域 A1:A2 上迷你图组的迷你图，并显示该区域上迷你图组的数量。*/
function test() {
    let sparklineGroups = Worksheets.Item(1).Range("A1:A2").SparklineGroups
    sparklineGroups.Clear()
    alert(sparklineGroups.Count)
}
```
