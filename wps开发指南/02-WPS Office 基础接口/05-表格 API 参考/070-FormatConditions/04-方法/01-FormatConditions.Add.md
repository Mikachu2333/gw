# FormatConditions.Add

添加新的条件格式。返回一个 **[FormatCondition](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/obj)** 对象，它代表新的条件格式。



## 语法

express.**Add(Type, Operator, Formula1, Formula2, String, TextOperator, DateOperator, ScopeType)**

express   一个代表 **FormatConditions** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | XlFormatConditionType | 指定条件格式是基于单元格值还是基于表达式。 |
| Operator | 可选 | any | 条件格式运算符。可为以下 XlFormatConditionOperator 常量之一：xlBetween、xlEqual、xlGreater、xlGreaterEqual、xlLess、xlLessEqual、xlNotBetween 或 xlNotEqual。如果 Type 为 xlExpression，则忽略 Operator 参数。 |
| Formula1 | 可选 | any | 与条件格式相关联的值或表达式。可为常量值、字符串值、单元格引用或公式。 |
| Formula2 | 可选 | any | 当 Operator 为 xlBetween 或 xlNotBetween 时，它是与条件格式第二部分相关联的值或表达式（否则忽略该参数）。可为常量值、字符串值、单元格引用或公式。 |

## 返回值

Object

## 说明


对单个区域定义的条件格式不能超过三个。使用 **Modify** 方法可修改现有的条件格式，使用 **Delete** 方法可在添加新条件格式前删除现有的格式。



## 示例


```JavaScript
/*本示例向第一张工作表上单元格区域 E1:E10 中添加条件格式*/
function test() {
    let formatCondition = Application.Worksheets.Item(1).Range("E1:E10").FormatConditions.Add(xlCellValue, xlGreater, "=$A$1")
    let boders = formatCondition.Borders
    boders.LineStyle = xlContinuous
    boders.Weight = xlThin
    boders.ColorIndex = 6
    let font = formatCondition.Font
    font.Bold = true
    font.ColorIndex = 3
}
```


```JavaScript
/*本示例在活动工作表上单元格区域 B1:B10 上新增条件格式，并设置该条件格式的内部颜色。*/
function test() {
    let formatCondition = ActiveSheet.Range("B1:B10").FormatConditions.Add(xlCellValue, xlBetween, "=3", "=9")
    formatCondition.Interior.ColorIndex = 3
}
```
