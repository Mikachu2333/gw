# Chart.ApplyDataLabels

将数据标签应用于图表中的所有系列。



## 语法

express.**ApplyDataLabels(Type, LegendKey, AutoText, HasLeaderLines, ShowSeriesName, ShowCategoryName, ShowValue, ShowPercentage, ShowBubbleSize, Separator)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 可选 | XlDataLabelsType | 用于指定要应用的数据标签类型的一个枚举值。可以是 **xlDataLabelsType** 常量之一。 |
| LegendKey | 可选 | any | 如果为 **True** ，则在数据点旁边显示图例项。默认值为 **False** 。 |
| AutoText | 可选 | any | 如果对象根据内容自动生成合适的文本，则为 **True** 。 |
| HasLeaderLines | 可选 | any | 对于 **[Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/obj)** 和 **[Series](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/obj)** 对象，如果系列有引导线，则该值为 **True** 。 |
| ShowSeriesName | 可选 | any | 如果为 **True** ，则为数据标签启用系列名称；否则为 **False** 。 |
| ShowCategoryName | 可选 | any | 如果为 **True** ，则为数据标签启用类别名称；否则为 **False** 。 |
| ShowValue | 可选 | any | 如果为 **True** ，则为数据标签启用值；否则为 **False** 。 |
| ShowPercentage | 可选 | any | 如果为 **True** ，则为数据标签启用百分比；否则为 **False** 。 |
| ShowBubbleSize | 可选 | any | 如果为 **True** ，则为数据标签启用气泡大小；否则为 **False** 。 |
| Separator | 可选 | any | 数据标签的分隔符。 |

## 返回值

void

## 说明


如果对 _Separator_ 参数使用字符串，则用一个字符串作为分隔符。如果使用 **xlDataLabelSeparatorDefault** （= 1），则用默认数据标签分隔符，即逗号或换行符，具体取决于数据标签。当返回值“1”时，表明用户未更改默认的分隔符逗号“,”。您还可通过传递枚举值 **xlDataLabelSeparatorDefault** 将分隔符更改回默认分隔符。以编程方式访问数据标签之前必须先激活图表，否则将出现运行时错误。

_Type_ 参数可以是下列 **XlDataLabelsType** 常量之一：

* **xlDataLabelsShowBubbleSizes** ：数据标签的气泡尺寸。
* **xlDataLabelsShowLabelAndPercent** ：占总数的百分比及数据点所属的分类。仅用于饼图和圆环图。
* **xlDataLabelsShowPercent** ：占总数的百分比。仅用于饼图和圆环图。
* **xlDataLabelsShowLabel** ：数据点所属的分类。
* **xlDataLabelsShowNone** ：无数据标签。
* **xlDataLabelsShowValue** ：（默认）数据点的值（若未指定此参数，则假定为此值）。



## 示例


```JavaScript
/*本示例将分类标签应用于活动演示文稿的第一张幻灯片的第一个图表。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.ApplyDataLabels(xlDataLabelsShowLabel)
    }
}
```


```JavaScript
/*本示例先清除第一个演示文稿的第一张幻灯片上第二个图表的数据标签，再对该图表的所有系列应用百分比及类别标签，并显示图例项标示以及使用分号作为分隔符。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    chart.ApplyDataLabels(xlDataLabelsShowNone)
    chart.ApplyDataLabels(xlDataLabelsShowLabelAndPercent, true, null, null, true, false, null, null, null, ";")
}
```
