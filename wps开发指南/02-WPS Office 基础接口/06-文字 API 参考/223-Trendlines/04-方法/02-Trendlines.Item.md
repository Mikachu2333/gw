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

集合中包含的一个 **[Trendline](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/obj)** 对象。

## 示例


```JavaScript
/*本示例设置活动文档中第一个内嵌图表上的趋势线向前和向后延伸的单位数。应在包含单个带趋势线系列的二维柱形图上运行该示例。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let trendline = inlineShape.Chart.SeriesCollection(1).Trendlines().Item(1)
        trendline.Forward = 5
        trendline.Backward = 0.5
    }
}
```


```JavaScript
/*本示例更改第一个文档上第一个形状中图表的第二个系列上的第一个趋势线的类型。*/
function test() {
    Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Trendlines().Item(1).Type = xlMovingAvg
}
```
