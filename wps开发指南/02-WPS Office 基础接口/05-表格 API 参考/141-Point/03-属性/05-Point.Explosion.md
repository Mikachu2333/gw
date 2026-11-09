# Point.Explosion

返回或设置饼图或圆环图的扇区的分离程度值。如果没有分离，则返回 0（零），即扇区的中心与饼图中心重合。 **Long** 型，可读写。



## 语法

express.**Explosion**

express   一个代表 **Point** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*此示例设置 Chart1 中第二个点的分离值。此示例应在饼图上运行。*/
function test() {
    let point = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).Points(2)
    point.Explosion = 20
}
```


```JavaScript
/*此示例判断活动工作表第一个图表上第二个数据点是否分离。*/
function test() {
    Application.ActiveSheet.ChartObjects(1).Activate()
    let point = ActiveChart.SeriesCollection(1).Points(2)
    if (point.Explosion > 0) {
        alert("数据点已分离")
    } else {
        alert("数据点未分离")
    }
}
```
