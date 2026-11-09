# InlineShapes.Item

返回集合中的单个 **InlineShape** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **InlineShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

InlineShape

## 示例


```JavaScript
/*本示例选中第一个文档中第一个内嵌形状。*/
function test() {
    Documents.Item(1).InlineShapes.Item(1).Select()
}
```


```JavaScript
/*本示例删除活动文档中第二个内嵌图表的图表标题。*/
function test() {
    let charts = Application.ActiveDocument.InlineShapes(2).Chart
    charts.ChartTitle.Delete()
}
```
