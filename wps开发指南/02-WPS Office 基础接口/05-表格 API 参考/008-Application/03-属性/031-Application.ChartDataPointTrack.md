# Application.ChartDataPointTrack

如果为 **True** ，则新创建的文档中的所有图表都使用单元格引用跟踪行为。 **Boolean** 类型，可读写。



## 语法

express.**ChartDataPointTrack**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


数据标签现在跟踪它们(附加到的实际数据点，而不是跟踪数据点)索引的旧行为，从而允许标签到点关系在筛选和排序等事件之间持久保留。



## 示例


```JavaScript
/*本示例判断如果新创建的文档中的所有图表都使用单元格引用跟踪行为，则通知用户。*/
function test() {
    if (Application.ChartDataPointTrack) {
        alert("使用单元格引用跟踪行为")
    }
}
```


```JavaScript
/*本示例设置新创建的文档中的所有图表都使用单元格引用跟踪行为。*/
function test() {
    Application.ChartDataPointTrack = true
}
```
