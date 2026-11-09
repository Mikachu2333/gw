# Series.HasDataLabels

如果数据系列具有数据标签，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**HasDataLabels**

express   一个代表 **Series** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示 Chart1 中第三个数据系列的数据标签。*/
function test() {
    let Ser = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(3)
    Ser.HasDataLabels = true
    Ser.ApplyDataLabels(xlValue)
}
```


```JavaScript
/*此示例显示图表工作表 Chart1 上的第二个数据系列是否有数据标签。*/
function test() {
    let series2 = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2)
    alert(series2.HasDataLabels)
}
```
