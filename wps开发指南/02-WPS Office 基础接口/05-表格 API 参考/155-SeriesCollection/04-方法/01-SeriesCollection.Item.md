# SeriesCollection.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **SeriesCollection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

包含在集合中的一个 Series 对象。

## 示例


```JavaScript
/*本示例对 Chart1 中的趋势线向前和向后延伸的单位数进行设置。本示例应在包含单个带趋势线系列的二维柱形图上运行。*/
function test() {
    let trendlines = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection().Item(1).Trendlines().Item(1)
    trendlines.Forward = 5
    trendlines.Backward = .5
}
```


```JavaScript
/*此示例将第一张工作表上的第一个图表的第二个数据系列名称设置为“系列二”。*/
function test() {
    let series2 = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection().Item(2)
    series2.Name = "系列二"
}
```
