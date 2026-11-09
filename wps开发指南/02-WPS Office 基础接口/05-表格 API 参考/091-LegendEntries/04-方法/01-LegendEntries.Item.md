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

包含在集合中的一个 LegendEntry 对象。

## 示例


```JavaScript
/*此示例对 Sheet1 中第一张嵌入式图表的图例（通常是第一个数据系列的图例）顶部的图例项的文本字体进行更改。*/
function test() {
    Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Legend.LegendEntries().Item(1).Font.Italic = true
}
```


```JavaScript
/*本示例删除 Chart1 上第一个图例项。*/
function test() {
    Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend.LegendEntries().Item(1).Delete()
}
```
