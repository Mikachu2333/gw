# Charts.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **Charts** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

Object

## 示例


```JavaScript
/*此示例对图表工作表 Chart1 中的趋势线向前和向后延伸的单位数进行设置。此示例应在包含单个带趋势线系列的二维柱形图上运行。*/
function test() {
    let chartLine = Application.Charts.Item("Chart1").SeriesCollection(1).Trendlines(1)
    chartLine.Forward2 = 5
    chartLine.Backward2 = 0.5
}
```


```JavaScript
/*本示例显示图表工作表 Chart1 的图例，然后将图例的字体颜色设为蓝色。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.HasLegend = true
    chart.Legend.Font.ColorIndex = 5
}
```
