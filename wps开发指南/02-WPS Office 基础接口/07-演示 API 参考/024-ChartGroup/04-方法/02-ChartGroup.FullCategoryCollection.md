# ChartGroup.FullCategoryCollection

返回图表组中的所有类别或指定的类别，无论是否可见或筛选掉。



## 语法

express.**FullCategoryCollection(Index)**

express   一个代表 **ChartGroup** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 要返回的类别的完整类别集合中的索引号。 |

## 返回值

Object

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表中第一个图表组的第一个类别是否筛选出序列。*/
function test() {
    let chartGroup = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.FullCategoryCollection(1).IsFiltered)
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第一个图表组的类别的数量。*/
function test() {
    let chartGroup = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.FullCategoryCollection().Count)
}
```
