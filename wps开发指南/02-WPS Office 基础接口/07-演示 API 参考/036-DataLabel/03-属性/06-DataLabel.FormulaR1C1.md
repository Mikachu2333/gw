# DataLabel.FormulaR1C1

以宏语言使用 R1C1 样式表示法返回或设置对象的公式。可读写 **String** 类型。



## 语法

express.**FormulaR1C1**

express   一个代表 **DataLabel** 对象的变量。

## 类型

string

## 说明


如果单元格包含常量，此属性返回该常量。如果单元格为空，此属性返回一个空字符串。如果单元格包含公式，此属性将该公式作为字符串返回，所用格式与在公式编辑栏中显示的格式相同（包括等号（=））。

如果将单元格的值或公式设置为日期，WPP 将验证该单元格的格式是否已设置为某个日期或时间数字格式。如果不符合，将采用默认的短日期数字格式。

如果指定区域是一维或二维区域，则可将公式设置为相同维数的 JavaScript 数组。同样，也可在 JavaScript 数组中使用公式。

对多重单元格区域设置公式，则该区域中所有单元格都用此公式填充。



## 示例


```JavaScript
/*本示例设置以宏语言的 R1C1 样式表示的活动演示文稿的第一张幻灯片中第一张图表的第二个数据系列的第三个数据标签的公式。*/
function test() {
    let dataLabel = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).DataLabels(3)
    dataLabel.FormulaR1C1Local = "example_1"
}
```


```JavaScript
/*本示例显示以宏语言的 R1C1 样式表示的第一个演示文稿的第一张幻灯片上第一个图表的第二个数据系列的第四个数据标签的公式。*/
function test() {
    let dataLabel = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).DataLabels(4)
    alert(dataLabel.FormulaR1C1)
}
```
