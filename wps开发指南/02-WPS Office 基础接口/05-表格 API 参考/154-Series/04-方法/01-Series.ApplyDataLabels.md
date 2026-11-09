# Series.ApplyDataLabels

向系列应用数据标签。



## 语法

express.**ApplyDataLabels(Type, LegendKey, AutoText, HasLeaderLines, ShowSeriesName, ShowCategoryName, ShowValue, ShowPercentage, ShowBubbleSize, Separator)**

express   一个代表 **Series** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 可选 | XlDataLabelsType | 要应用的数据标签的类型。 |
| LegendKey | 可选 | any | 如果为 True，则在数据点旁边显示图例项标示。默认值为 False。 |
| AutoText | 可选 | any | 如果对象根据内容自动生成相应的文字，则为 True。 |
| HasLeaderLines | 可选 | any | 对于 Chart 和 Series 对象，如果数据系列有引导线，则为 True。 |
| ShowSeriesName | 可选 | any | 传递布尔值以启用或禁用数据标签的系列名称。 |
| ShowCategoryName | 可选 | any | 传递布尔值以启用或禁用数据标签的分类名称。 |
| ShowValue | 可选 | any | 传递布尔值以启用或禁用数据标签的值。 |
| ShowPercentage | 可选 | any | 传递布尔值以启用或禁用数据标签的百分比。 |
| ShowBubbleSize | 可选 | any | 传递布尔值以启用或禁用数据标签的气泡大小。 |
| Separator | 可选 | any | 数据标签的分隔符。 |

## 返回值

any

## 说明


| **XlDataLabelsType** 可为以下 **XlDataLabelsType** 常量之一。            |
| --------------------------------------------------------------- |
| **xlDataLabelsShowBubbleSizes** 。数据标签的气泡尺寸。                      |
| **xlDataLabelsShowLabelAndPercent** 。占总数的百分比及数据点所属的分类。仅用于饼图和圆环图。 |
| **xlDataLabelsShowPercent** 。占总数的百分比。仅用于饼图和圆环图。                  |
| **xlDataLabelsShowLabel** 。数据点所属的分类。                             |
| **xlDataLabelsShowNone** 。无数据标签。                                 |
| **xlDataLabelsShowValue** 。默认。数据点的值（若未指定此参数，则假定为此值）。             |



## 示例


```JavaScript
/*此示例对图表工作表 Chart1 上的第一个数据系列先清除数据标签，再应用分类标签。*/
function test() {
    let series1 = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1)
    series1.ApplyDataLabels(xlDataLabelsShowNone)
    series1.ApplyDataLabels(xlDataLabelsShowLabel)
}
```


```JavaScript
/*此示例对活动工作表中第一个图表的每个数据系列分别应用分类标签，并显示标签的系列名和类别名以“/”分割。*/
function test() {
    let collection = ActiveSheet.ChartObjects(1).Chart.SeriesCollection()
    for (let i = 1; i <= collection.Count; i++) {
        let series = collection.Item(i)
        series.ApplyDataLabels(xlDataLabelsShowNone)
        series.ApplyDataLabels(xlDataLabelsShowLabel, null, null, null, true, true, null, null, null, "/")
    }
}
```
