# Point.ApplyDataLabels

对数据点应用数据标签。



## 语法

express.**ApplyDataLabels(Type, LegendKey, AutoText, HasLeaderLines, ShowSeriesName, ShowCategoryName, ShowValue, ShowPercentage, ShowBubbleSize, Separator)**

express   一个代表 **Point** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 可选 | XlDataLabelsType | 要应用的数据标签的类型。可以是 **xlDataLabelsType** 常量之一。 |
| LegendKey | 可选 | any | 如果为 **True** ，则在数据点旁边显示图例项标示。默认值为 **False** 。 |
| AutoText | 可选 | any | 如果对象根据内容自动生成适当的文本，则为 **True** 。 |
| HasLeaderLines | 可选 | any | 对于 **[Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/obj)** 和 **[Series](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/obj)** 对象，如果系列具有引导线，则为 **True** 。 |
| ShowSeriesName | 可选 | any | 如果为 **True** ，则启用数据标签的系列名称；否则为 **False** 。 |
| ShowCategoryName | 可选 | any | 如果为 **True** ，则启用数据标签的类别名称；否则为 **False** 。 |
| ShowValue | 可选 | any | 如果为 **True** ，则启用数据标签的值；否则为 **False** 。 |
| ShowPercentage | 可选 | any | 如果为 **True** ，则启用数据标签的百分比；否则为 **False** 。 |
| ShowBubbleSize | 可选 | any | 如果为 **True** ，则启用数据标签的气泡大小；否则为 **False** 。 |
| Separator | 可选 | any | 数据标签的分隔符。 |

## 返回值

any

## 说明


_Type_ 参数可以是下列 **XlDataLabelsType** 常量之一：

* **xlDataLabelsShowLabelAndPercent** ：占总数的百分比及数据点所属的分类。仅用于饼图和圆环图。
* **xlDataLabelsShowPercent** ：占总数的百分比。仅用于饼图和圆环图。
* **xlDataLabelsShowLabel** ：数据点所属的分类。
* **xlDataLabelsShowNone** ：无数据标签。
* **xlDataLabelsShowValue** ：（默认）数据点的值（若未指定此参数，则假定为此值）。



## 示例


```JavaScript
/*本示例对活动演示文稿的第一张幻灯片上第一个图表的第一个系列的第一个数据点应用分类标签。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).Points(1).ApplyDataLabels(xlDataLabelsShowLabel)
    }
}
```


```JavaScript
/*本示例对第一个演示文稿的第一张幻灯片上第一个图表的第二个系列的第三个数据点应用绝对值标签。*/
function test() {
    let point = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Points(3)
    point.ApplyDataLabels(xlDataLabelsShowBubbleSizes, true, null, null, null, null, true)
}
```
