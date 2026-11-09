# Trendlines.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **Trendlines** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 对象的索引号。 |

## 返回值

包含在集合中的一个 Trendline 对象。

## 示例


```JavaScript
/*本示例对 Chart1 中的趋势线向前和向后延伸的单位数进行设置。本示例应在包含具有趋势线的单个序列的 2D 柱形图上运行。*/
function test() {
    let trendline = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1).Trendlines().Item(1)
    trendline.Forward = 5
    trendline.Backward = 0.5
}
```


```JavaScript
/*此示例显示第一张工作表上的第一个图表的第二个数据系列索引为2的趋势线名称。*/
function test() {
    let series = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(2)
    alert(series.Trendlines().Item(2).Name)
}
```
