# DataLabels.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **DataLabels** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的索引号。 |

## 返回值

包含在集合中的一个 **[DataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabel/obj)** 对象。

## 示例


```JavaScript
/*本示例设置活动文档中第一个图表上第一个系列中第五个数据标签的数字格式。*/
function test() {
    let inlineshp = ActiveDocument.InlineShapes(1)
    if (inlineshp.HasChart) {
        let datalabel = inlineshp.Chart.SeriesCollection(1).DataLabels().Item(5)
        datalabel.NumberFormat = "0.000"
    }
}
```


```JavaScript
/*本示例允许在第一个文档的第一个图表上显示第三个系列中第五个数据标签的系列名称。*/
function test() {
    let inlineshp = Documents.Item(1).InlineShapes(1)
    let datalabel = inlineshp.Chart.SeriesCollection(3).DataLabels().Item(5)
    datalabel.ShowSeriesName = true
}
```
