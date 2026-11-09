# Trendline.InterceptIsAuto

如果趋势线与数值轴的交叉点由回归分析自动确定，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**InterceptIsAuto**

express   一个代表 **Trendline** 对象的变量。

## 类型

boolean

## 说明


设置 **Intercept** 属性会将该属性设置为 **False** 。



## 示例


```JavaScript
/*本示例设置 ET 自动判断 Chart1 的趋势线与数值坐标轴的交点。本示例应在包含具有趋势线的单个序列的 2D 柱形图上运行。*/
function test() {
    Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).Trendlines(1).InterceptIsAuto = true
}
```


```JavaScript
/*此示例显示第一张工作表上的第一个图表的第三个数据系列索引为1的趋势线与数值轴的交叉点是否由回归分析自动确定。*/
function test() {
    let series = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(3)
    alert(series.Trendlines(1).InterceptIsAuto)
}
```
