# Series.Points

返回一个对象，该对象表示数据系列中单个数据点（ **Point** 对象）或所有数据点的集合（ **Points** 集合）。只读



## 语法

express.**Points(Index)**

express   一个代表 **Series** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 数据点的名称或编号。 |

## 返回值

Object

## 示例


```JavaScript
/*本示例对 Chart1 中第一个数据系列的第一个数据点应用数据标签。*/
function test() {
    Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection().Item(1).Points(1).ApplyDataLabels()
}
```


```JavaScript
/*此示例显示第一张工作表上的第一个图表的第二个数据系列的第二个数据点宽度。*/
function test() {
    let series2 = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(2)
    alert(series2.Points(2).Width)
}
```
