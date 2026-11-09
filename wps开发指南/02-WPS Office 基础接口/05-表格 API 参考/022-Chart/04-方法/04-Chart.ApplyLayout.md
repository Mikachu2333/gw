# Chart.ApplyLayout

应用功能区中显示的版式。



## 语法

express.**ApplyLayout(Layout, ChartType)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Layout | 必选 | number（int4 精度） | 指定版式类型。版式类型由 1 到 10 的数字表示。 |
| ChartType | 可选 | any | 图表的类型。 |

## 返回值

void

## 说明


在当前图表类型上使用版式时，会将介于 1 到 10 之间的数字应用于该图表类型。还可以将某一图表类型的版式应用于另一个图表类型。例如，可以将折线图中的可用版式应用于柱形图。版式只会添加可用于该特定图表类型的图表元素。



## 示例


```JavaScript
/*本示例设置活动工作表的第一个图表版式为复合饼图的第2个版式类型。*/
function test() {
    ActiveSheet.ChartObjects(1).Chart.ApplyLayout(2, xlPieOfPie)
}
```


```JavaScript
/*本示例设置第一张工作表的第一个图表版式为三维面积图的第7个版式类型。*/
function test() {
    let chart = Application.Sheets.Item(1).ChartObjects(1).Chart
    chart.ApplyLayout(7, xl3DArea)
}
```
