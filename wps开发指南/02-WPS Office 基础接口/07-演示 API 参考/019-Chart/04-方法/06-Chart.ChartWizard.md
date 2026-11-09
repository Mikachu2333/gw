# Chart.ChartWizard

修改给定图表的属性。可使用本方法快速设置图表的格式，而不必逐个设置所有属性。本方法是非交互式的，并且仅更改指定的属性。



## 语法

express.**ChartWizard(Source, Gallery, Format, PlotBy, CategoryLabels, SeriesLabels, HasLegend, Title, CategoryTitle, ValueTitle, ExtraTitle)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Source | 可选 | any | 包含新图表源数据的区域。如果省略该参数，WPP 将编辑指定幻灯片上的选定图表。 |
| Gallery | 可选 | any | 一个指定图表类型的 **[XlChartType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartType)** 常量。 |
| Format | 可选 | any | 内置自动套用格式的选项编号。可为从 1 到 10 的数字，其取值依赖于库的类型。如果省略该参数，WPP 将基于库类型和数据源选择默认值。 |
| PlotBy | 可选 | any | 指定每个系列中的数据是在行中还是在列中。可为下列 **[XlRowCol](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlRowCol)** 常量之一： **xlRows** 或 **xlColumns** 。 |
| CategoryLabels | 可选 | any | 指定包含分类标签的源范围内的行数或列数的整数。合法值为从 0（零）至小于相应分类或系列的最大个数间的某一数字。 |
| SeriesLabels | 可选 | any | 指定包含系列标签的源范围内的行数或列数的整数。合法值为从 0（零）至小于相应分类或系列的最大个数间的某一数字。 |
| HasLegend | 可选 | any | 如果为 **True** ，则图表将具有图例。 |
| Title | 可选 | any | 图表标题文本。 |
| CategoryTitle | 可选 | any | 分类轴标题文本。 |
| ValueTitle | 可选 | any | 数值轴标题文本。 |
| ExtraTitle | 可选 | any | 三维图表的系列轴标题，或二维图表的次数值轴标题。 |

## 返回值

void

## 说明


如果省略 _Source_ 参数，并且所选的内容不是指定幻灯片中的图表，则此方法将失败并出现错误。



## 示例


```JavaScript
/*本示例重新设置第一个图表的格式，将其改为折线图，添加图例，并添加分类轴标题和数值轴标题。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.ChartWizard(null, xlLine, null, null, null, null, true, null, "Year", "Sales")
}
```


```JavaScript
/*本示例重新设置第一个演示文稿的第一张幻灯片上第二个图表的格式，将其改为百分比堆积柱形图第三个版式，添加图例、分类轴标题和数值轴标题。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    chart.ChartWizard(null, xlColumnStacked100, 3, xlColumns, null, null, true, null, "Age", "Year")
}
```
