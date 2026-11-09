# Series.Trendlines

返回一个对象，该对象表示单个趋势线（ **Trendline** 对象）或所有趋势线的集合（ **Trendlines** 集合）。



## 语法

express.**Trendlines(Index)**

express   一个代表 **Series** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 趋势线的名称或编号。 |

## 返回值

Object

## 示例


```JavaScript
/*本示例向 Chart1 中第一个数据系列添加线性趋势线。*/
function test() {
    Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection().Item(1).Trendlines().Add(xlLinear)
}
```


```JavaScript
/*此示例显示第一张工作表上的第一个图表的第二个数据系列索引为1的趋势线名字。*/
function test() {
    let series2 = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(2)
    alert(series2.Trendlines(1).Name)
}
```
