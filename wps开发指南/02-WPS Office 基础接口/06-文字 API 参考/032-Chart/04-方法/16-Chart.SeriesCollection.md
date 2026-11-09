# Chart.SeriesCollection

返回图表中的所有系列。



## 语法

express.**SeriesCollection(Index)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 数据系列的名称或编号。 |

## 返回值

一个代表图表中所有系列的 **[SeriesCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/SeriesCollection/obj)** 对象。

## 示例


```JavaScript
/*本示例对活动文档中第一个图表的第一个系列应用数据标签。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).HasDataLabels = true
    }
}
```


```JavaScript
/*本示例显示第一个文档中第一个图表的第二个系列是否有阴影。*/
function test() {
    let inlineShape = Application.Documents.Item(1).InlineShapes.Item(1)
    alert(inlineShape.Chart.SeriesCollection(2).Shadow)
}
```
