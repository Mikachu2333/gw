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

包含在集合中的一个 **[Series](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Series/obj)** 对象。

## 示例


```JavaScript
/*本示例设置活动文档中第一个图表上的趋势线向前和向后延伸的单位数。应在包含单个带趋势线系列的二维柱形图上运行该示例。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let trendline = inlineShape.Chart.SeriesCollection().Item(1).Trendlines().Item(1)
        trendline.Forward = 5
        trendline.Backward = 0.5
    }
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的第二个系列的边框线条样式设置为 xlDash。*/
function test() {
    let series = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection().Item(2)
    series.Border.LineStyle = xlDash
}
```
