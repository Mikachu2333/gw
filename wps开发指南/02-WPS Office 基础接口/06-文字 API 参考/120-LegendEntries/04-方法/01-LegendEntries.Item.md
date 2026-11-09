# LegendEntries.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **LegendEntries** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的索引号。 |

## 返回值

包含在集合中的一个 **[LegendEntry](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LegendEntry/obj)** 对象。

## 示例


```JavaScript
/*本示例更改活动文档中第一个图表上位于图例顶部的图例项（这通常是第一个系列的图例）的文字字体。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.Legend.LegendEntries().Item(1).Font.Italic = true
    }
}
```


```JavaScript
/*本示例删除活动文档第一个形状中图表上位于图例顶部的图例项（这通常是第一个系列的图例）。*/
function test() {
    ActiveDocument.Shapes.Item(1).Chart.Legend.LegendEntries().Item(1).Delete()
}
```
