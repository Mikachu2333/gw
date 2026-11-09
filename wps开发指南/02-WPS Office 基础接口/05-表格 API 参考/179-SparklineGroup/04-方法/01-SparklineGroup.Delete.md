# SparklineGroup.Delete

删除迷你图组。



## 语法

express.**Delete()**

express   一个代表 **SparklineGroup** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除单元格 I1 中第一个迷你图组。*/
function test() {
    Range("I1").SparklineGroups.Item(1).Delete()
}
```


```JavaScript
/*本示例删除活动工作表上单元格 I1 中第一个迷你图组，并显示该迷你图组中迷你图的数量。*/
function test() {
    let sparklineGroup = ActiveSheet.Range("I1").SparklineGroups.Item(1)
    sparklineGroup.Delete()
    alert(sparklineGroup.Count)
}
```
