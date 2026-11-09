# Series.DataLabels

返回一个代表系列中单个数据标签（ **[DataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/obj)** 对象）或所有数据标签集合（ **[DataLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabels/obj)** 集合）的对象。



## 语法

express.**DataLabels(Index)**

express   一个代表 **Series** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 数据标签的编号。 |

## 返回值

一个代表系列中的单个数据标签（ **DataLabel** 对象）或所有数据标签集合（ **DataLabels** 集合）的对象。

## 说明


如果系列中指定数据标签的 **“显示值”** 选项处于打开状态，则返回的集合中每个数据点最多包含一个数据标签。可对系列中的各个数据点打开或关闭数据标签。

如果指定系列处于面积图中，并且数据标签的 **“显示标签”** 选项处于打开状态，则返回的集合中仅包含单个数据标签，即面积系列的标签。



## 示例


```JavaScript
/*本示例将活动演示文稿上第一张幻灯片中第一个图表的第一个系列的数据标签设置为显示其图例项标示，该示例假定数据标签的值在示例运行时可见。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let series = shape.Chart.SeriesCollection(1)
        series.HasDataLabels = true
        let dataLabels = series.DataLabels()
        dataLabels.ShowLegendKey = true
    }
}
```


```JavaScript
/*本示例将第一篇演示文稿上第二张幻灯片中第一个图表的第三个系列的第一个数据标签删除，该示例假定数据标签的值在示例运行时可见。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(2).Shapes.Item(1)
    shape.Chart.SeriesCollection(3).DataLabels(1).Delete()
}
```
