# Series.Points

返回系列中所有数据点的集合。



## 语法

express.**Points(Index)**

express   一个代表 **Series** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 数据点的名称或编号。 |

## 返回值

一个代表系列中所有数据点的 **[Points](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Points/obj)** 对象。

## 示例


```JavaScript
/*本示例将数据标签应用于活动演示文稿上第一张幻灯片中第一个图表的第一个系列的第一个数据点。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).Points(1).ApplyDataLabels()
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿上第一张幻灯片中第一个图表的第一个系列的第一个数据点名称。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        alert(shape.Chart.SeriesCollection(1).Points(1).Name)
    }
}
```
