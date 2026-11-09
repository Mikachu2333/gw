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

一个包含在集合中的 **[ChartGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartGroup/obj)** 对象。

## 示例


```JavaScript
/*本示例为活动演示文稿的第一张幻灯片中第一个图表上的第一个图表组启用垂直线。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.ChartGroups().Item(1).HasDropLines = true
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第一个图表组的坐标轴组的类型是否为xlPrimary。*/
function test() {
    let chartGroup = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups().Item(1)
    alert(chartGroup.AxisGroup == xlPrimary)
}
```
