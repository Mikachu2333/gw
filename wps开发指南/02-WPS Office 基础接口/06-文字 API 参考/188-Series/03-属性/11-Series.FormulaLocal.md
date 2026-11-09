# Series.FormulaLocal

返回或设置对象的公式，使用用户语言 A1 格式引用。可读/写 **String** 类型。



## 语法

express.**FormulaLocal**

express   一个代表 **Series** 对象的变量。

## 类型

string

## 说明


如果指定单元格包含常量，此属性返回的就是该常量。如果单元格为空，此属性返回一个空字符串。如果单元格包含公式，此属性将该公式作为字符串返回，所用格式与在编辑栏（包括等号）中显示时的格式相同。

如果将单元格的值或公式设为日期类型，WPS 将检查该单元格的格式是否符合某个日期或时间数字格式，如果不符合，数字格式将更改为默认的短日期数字格式。

如果指定区域是一维或二维区域，则可将公式指定为 JavaScript 中相同维数的数组。同样，也可在 JavaScript 数组中使用公式。

如果对多重单元格区域设置公式，则该区域中的所有单元格都用此公式填充。



## 示例


```JavaScript
/*本示例显示第一个文档中第二个图表的第一个系列的公式（用户语言）。*/
function test() {
    let inlineShape = Documents.Item(1).InlineShapes.Item(2)
    if (inlineShape.HasChart) {
        alert(inlineShape.Chart.SeriesCollection(1).FormulaLocal)
    }
}
```


```JavaScript
/*本示例显示选中图表的第三个系列的公式（用户语言）。*/
function test() {
    let series = Selection.InlineShapes.Item(1).Chart.SeriesCollection(3)
    alert(series.FormulaLocal)
}
```
