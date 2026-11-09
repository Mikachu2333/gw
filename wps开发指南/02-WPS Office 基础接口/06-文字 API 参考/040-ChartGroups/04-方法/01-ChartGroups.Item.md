# ChartGroups.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **ChartGroups** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的索引号。 |

## 返回值

包含在集合中的一个 **[ChartGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/obj)** 对象。

## 示例


```JavaScript
/*本示例为活动文档中第一个图表上的第一个图表组启用垂直线。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.ChartGroups().Item(1).HasDropLines = true
    }
}
```


```JavaScript
/*本示例为第一个文档上第一个形状中雷达图的第一个图表组应用雷达图轴标签，然后设置其颜色。*/
function test() {
    let chartGroup = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartGroups().Item(1)
    chartGroup.HasRadarAxisLabels = true
    chartGroup.RadarAxisLabels.Font.Color = RGB(255, 0, 0)
}
```
