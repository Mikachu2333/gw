# Sparkline.SourceData

返回或设置包含单个迷你图的源数据的区域。可读/写。



## 语法

express.**SourceData**

express   一个代表 **Sparkline** 对象的变量。

## 类型

**String** 

## 说明


单个迷你图的数据源区域必须是连续的。



## 示例


```JavaScript
/*本示例显示单元格 I1 中第一个迷你图组的第一个迷你图的源数据的区域。*/
function test() {
    alert(Range("I1").SparklineGroups(1).Item(1).SourceData)
}
```


```JavaScript
/*本示例设置活动工作表上单元格 I1 中第一个迷你图组的第一个迷你图的源数据的区域。*/
function test() {
    let sparkline = ActiveSheet.Range("I1").SparklineGroups(1).Item(1)
    sparkline.SourceData = "A1:C1"
}
```
