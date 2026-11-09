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

集合中包含的一个 **[Point](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Point/obj)** 对象。

## 示例


```JavaScript
/*本示例为活动演示文稿的第一张幻灯片中第一个图表的第一个数据系列的第三个数据点设置标志样式。指定的系列必须是 2D 线、散点或雷达系列。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).Points().Item(3).MarkerStyle = xlMarkerStyleDiamond
    }
}
```


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上第一个图表的第二个数据系列的第一个数据点的数据标签设置为不可见。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.SeriesCollection(2).Points().Item(1).HasDataLabel = false
}
```
