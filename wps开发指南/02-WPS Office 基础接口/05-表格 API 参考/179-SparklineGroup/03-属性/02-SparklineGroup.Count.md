# SparklineGroup.Count

返回迷你图组中的迷你图数。只读。



## 语法

express.**Count**

express   一个代表 **SparklineGroup** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示单元格 I1 上第一个迷你图组中迷你图的数量。*/
function test() {
    alert(Range("I1").SparklineGroups.Item(1).Count)
}
```
