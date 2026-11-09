# Point.ApplyDataLabels

对数据点应用数据标签。



## 语法

express.**ApplyDataLabels(Type, LegendKey, AutoText, HasLeaderLines, ShowSeriesName, ShowCategoryName, ShowValue, ShowPercentage, ShowBubbleSize, Separator)**

express   一个代表 **Point** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 可选 | XlDataLabelsType | 要应用的数据标签的类型。可以是 **xlDataLabelsType** 常量之一。 |
| LegendKey | 可选 | any | 如果为 **True** ，则在点旁边显示图例项。默认值为 **False** 。 |
| AutoText | 可选 | any | 如果对象根据内容自动生成适当的文本，则为 **True** 。 |
| HasLeaderLines | 可选 | any | 对于 **Chart** 和 **Series** 对象，如果系列具有引线，则为 **True** 。 |
| ShowSeriesName | 可选 | any | 如果为 **True** ，则启用数据标签的系列名称；否则为 **False** 。 |
| ShowCategoryName | 可选 | any | 如果为 **True** ，则启用数据标签的类别名称；否则为 **False** 。 |
| ShowValue | 可选 | any | 如果为 **True** ，则启用数据标签的值；否则为 **False** 。 |
| ShowPercentage | 可选 | any | 如果为 **True** ，则启用数据标签的百分比；否则为 **False** 。 |
| ShowBubbleSize | 可选 | any | 如果为 **True** ，则启用数据标签的气泡大小；否则为 **False** 。 |
| Separator | 可选 | any | 数据标签的分隔符。 |

## 返回值

any

## 示例


```JavaScript
/*本示例对活动文档上第一个内嵌图表的第一个系列的第一个数据点应用分类标签。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).Points(1).ApplyDataLabels(xlDataLabelsShowLabel)
    }
}
```


```JavaScript
/*本示例对第一个文档上第一个形状中的图表的第二个系列的第三个数据点应用绝对值标签。*/
function test() {
    let point = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Points(3)
    point.ApplyDataLabels(xlDataLabelsShowBubbleSizes, true, null, null, null, null, true)
}
```
