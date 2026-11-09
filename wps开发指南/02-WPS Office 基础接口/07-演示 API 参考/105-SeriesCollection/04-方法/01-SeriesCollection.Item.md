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

集合中包含的 **[Series](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/obj)** 对象。

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片的第一个形状的第一个图表的趋势线向前和向后延伸。本示例应在包含具有趋势线的单个序列的 2D 柱形图上运行。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let series = shape.Chart.SeriesCollection().Item(1)
        series.Trendlines(1).Forward = 5
        series.Trendlines(1).Backward = 0.5
    }
}
```


```JavaScript
/*本示例删除第一个演示文稿的第一张幻灯片上第一个图表的第一个系列。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    let series = shape.Chart.SeriesCollection().Item(1)
    series.Delete()
}
```
