# Series.ApplyDataLabels

向系列应用数据标签。



## 语法

express.**ApplyDataLabels(Type, LegendKey, AutoText, HasLeaderLines, ShowSeriesName, ShowCategoryName, ShowValue, ShowPercentage, ShowBubbleSize, Separator)**

express   一个代表 **Series** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 可选 | XlDataLabelsType | 要应用的数据标签的类型。 |
| LegendKey | 可选 | any | 如果为 **True** ，则在数据点旁边显示图例项标示。默认值为 **False** 。 |
| AutoText | 可选 | any | 如果对象根据内容自动生成合适的文本，则为 **True** 。 |
| HasLeaderLines | 可选 | any | 对于 **[Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/obj)** 和 **[Series](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/obj)** 对象，如果系列有引导线，则该值为 **True** 。 |
| ShowSeriesName | 可选 | any | 如果为 **True** ，则为数据标签启用系列名称；否则为 **False** 。 |
| ShowCategoryName | 可选 | any | 如果为 **True** ，则为数据标签启用类别名称；否则为 **False** 。 |
| ShowValue | 可选 | any | 如果为 **True** ，则为数据标签启用值；否则为 **False** 。 |
| ShowPercentage | 可选 | any | 如果为 **True** ，则为数据标签启用百分比；否则为 **False** 。 |
| ShowBubbleSize | 可选 | any | 如果为 **True** ，则为数据标签启用气泡大小；否则为 **False** 。 |
| Separator | 可选 | any | 数据标签的分隔符。 |

## 返回值

any

## 说明


_Type_ 参数可以是下列 **XlDataLabelsType** 常量之一：

* **xlDataLabelsShowBubbleSizes** ：数据标签的气泡大小。
* **xlDataLabelsShowLabelAndPercent** ：占总数的百分比及数据点所属的分类。仅用于饼图和圆环图。
* **xlDataLabelsShowPercent** ：占总数的百分比。仅用于饼图和圆环图。
* **xlDataLabelsShowLabel** ：数据点所属的分类。
* **xlDataLabelsShowNone** ：无数据标签。
* **xlDataLabelsShowValue** ：（默认）数据点的值（若未指定此参数，则假定为此值）。



## 示例


```JavaScript
/*本示例将分类标签应用于活动演示文稿上第一张幻灯片中第一个图表的第一个系列。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).ApplyDataLabels(xlDataLabelsShowLabel)
    }
}
```


```JavaScript
/*本示例对第一篇演示文稿上第二张幻灯片中第一个图表的第三个系列应用分类标签，并显示标签的系列名和类别名以“/”分割。*/
function test() {
    let series = Presentations.Item(1).Slides.Item(2).Shapes.Item(1).Chart.SeriesCollection(3)
    series.ApplyDataLabels(xlDataLabelsShowNone)
    series.ApplyDataLabels(xlDataLabelsShowLabel, null, null, null, true, true, null, null, null, "/")
}
```
