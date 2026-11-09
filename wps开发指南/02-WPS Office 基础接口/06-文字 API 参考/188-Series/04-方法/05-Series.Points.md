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

一个代表系列中所有数据点的 **[Points](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Points/obj)** 对象。

## 示例


```JavaScript
/*本示例将数据标签应用于活动文档中第一个图表的第一个系列的第一个数据点。*/
function test() {
    let inlinShape = ActiveDocument.InlineShapes.Item(1)
    if (inlinShape.HasChart) {
        inlinShape.Chart.SeriesCollection(1).Points(1).ApplyDataLabels()
    }
}
```


```JavaScript
/*本示例显示选中文档上第一个图表的第一个系列的第一个数据点名称。*/
function test() {
    let inlinShape = Selection.InlineShapes.Item(1)
    alert(inlinShape.Chart.SeriesCollection(1).Points(1).Name)
}
```
