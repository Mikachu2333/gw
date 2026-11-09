# FullSeriesCollection.Item

从集合中返回单个 **[Series](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/obj)** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **FullSeriesCollection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的项的名称或索引号。 |

## 返回值

**Series** 

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个图表的第一个系列的阴影设置成可见。*/
function test() {
    let series = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.FullSeriesCollection().Item(1)
    series.Shadow = true
}
```


```JavaScript
/*本示例删除第一个演示文稿的第一张幻灯片上第一个图表的第二个系列。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    let series = shape.Chart.FullSeriesCollection().Item(2)
    series.Delete()
}
```
