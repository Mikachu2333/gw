# Series.Explosion

返回或设置饼图或圆环图的扇区的分离程度值。如果没有分离，则返回 0（零），即扇区的中心与饼图中心重合。 **Long** 型，可读写。



## 语法

express.**Explosion**

express   一个代表 **Series** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示 Chart1 中第二个系列切片的分解程度值。*/
function test() {
    let series2 = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2)
    alert(series2.Explosion)
}
```


```JavaScript
/*此示例将活动工作表上的第一个图表的第三个系列切片的分解程度值设置为10。*/
function test() {
    ActiveSheet.ChartObjects(1).Chart.SeriesCollection(3).Explosion = 10
}
```
