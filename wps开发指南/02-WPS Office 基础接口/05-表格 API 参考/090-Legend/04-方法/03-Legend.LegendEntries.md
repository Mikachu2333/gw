# Legend.LegendEntries

返回表示图例中的单个图例项（ **LegendEntry** 对象）或图例项集合（ **LegendEntries** 对象）的对象。



## 语法

express.**LegendEntries(Index)**

express   一个代表 **Legend** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 图例输入项的编号。 |

## 返回值

Object

## 示例


```JavaScript
/*本示例设置 Chart1 上第一个图例项的字体。*/
function test() {
    Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend.LegendEntries(1).Font.Name = "Arial"
}
```


```JavaScript
/*本示例显示第一张工作表上的第一个图表中图例的图例项数量。*/
function test() {
    alert(Worksheets.Item(1).ChartObjects(1).Chart.Legend.LegendEntries().Count)
}
```
