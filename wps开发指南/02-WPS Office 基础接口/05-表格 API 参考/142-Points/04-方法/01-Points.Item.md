# Points.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **Points** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 对象的索引号。 |

## 返回值

包含在集合中的一个 **[Point](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/obj)** 对象。

## 示例


```JavaScript
/*本示例设置第一个工作表上嵌入图表第一个系列中的第三个点的标记样式。指定的系列必须是 2D 线、散点或雷达系列。*/
function test() {
    Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(1).Points().Item(3).MarkerStyle = xlDiamond
}
```


```JavaScript
/*本示例显示 Chart1 中第三个数据系列的第4个数据点的宽度。*/
function test() {
    let series = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(3)
    alert(series.Points().Item(4).Width)
}
```
