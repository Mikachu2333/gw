# AxisTitle.FormulaLocal

返回或设置对象的公式，使用用户语言中的 A1 样式引用。可读/写 **String** 类型。



## 语法

express.**FormulaLocal**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

string

## 说明


如果单元格包含常量，此属性返回该常量。如果单元格为空，此属性返回一个空字符串。如果单元格包含公式，此属性将该公式作为字符串返回，所用格式与在编辑栏（包括等号（=））中显示时的格式相同。

如果将单元格的格式的值或公式设为日期类型，ET 将检查该单元格的格式是否符合某个日期或时间数组格式，如果不符合，将采用默认的短日期数字格式。

如果指定区域是一维或二维区域，则可将公式指定为 JavaScript 中相同维数的数组。同样，也可在 JavaScript 数组中使用公式。

对多重单元格区域设置公式，则该区域中所有单元格都用此公式填充。



## 示例


```JavaScript
/*本示例使用用户语言中的 A1 样式设置活动文档中第一张内嵌图表的分类轴标题的公式。*/
function test() {
    let axisTitle = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlCategory).AxisTitle
    axisTitle.FormulaLocal = "example"
}
```


```JavaScript
/*本示例在光标处插入使用用户语言中的 A1 样式表示的第一个文档上第一个形状中图表的数值轴标题的公式。*/
function test() {
    let axisTitle = Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).AxisTitle
    Selection.TypeText(axisTitle.FormulaLocal)
}
```
