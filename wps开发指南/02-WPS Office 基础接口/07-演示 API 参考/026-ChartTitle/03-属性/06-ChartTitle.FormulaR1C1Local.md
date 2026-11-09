# ChartTitle.FormulaR1C1Local

以用户语言使用 R1C1 样式表示法返回或设置对象的公式。可读/写。 **String** 。



## 语法

express.**FormulaR1C1Local**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

string

## 说明


如果单元格包含一个常量，此属性返回该常量。如果单元格为空，此属性返回一个空字符串。如果单元格包含公式，此属性将该公式作为字符串返回，所使用的格式与在公式栏中显示的格式相同（包括等号）。

如果将单元格的值或公式设置为日期，WPP 将检查该单元格的格式是否符合某种日期或时间数字格式；如果不符合，则将数字格式更改为默认短日期数字格式。

如果区域是一维或二维区域，则可以将公式设置为相同维数的 JavaScript 数组。同样，也可以在 JavaScript 数组中使用公式。

如果为多重单元格区域设置公式，则使用此公式填充该区域中的所有单元格。



## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一个图表以用户语言的 R1C1 样式表示标题的公式。*/
function test() {
    let chartTitle = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartTitle
    chartTitle.FormulaR1C1Local = "example_1"
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表以用户语言的 R1C1 样式表示标题的公式。*/
function test() {
    let chartTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartTitle
    alert(chartTitle.FormulaR1C1Local)
}
```
