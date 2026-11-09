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

集合中包含的一个 **[Trendline](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Trendline/obj)** 对象。

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一个图表上的趋势线向前和向后延伸的单位数。应在包含单个带趋势线系列的二维柱形图上运行该示例。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let trendline = shape.Chart.SeriesCollection(1).Trendlines().Item(1)
        trendline.Forward = 5
        trendline.Backward = 0.5
    }
}
```


```JavaScript
/*本示例更改第一个演示文稿的第一张幻灯片上第一个图表的第二个系列上的第一个趋势线的类型。*/
function test() {
    Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Trendlines().Item(1).Type = xlMovingAvg
}
```
