# FormatCondition.Modify

更改现有条件格式。



## 语法

express.**Modify(Type, Operator, Formula1, Formula2, String, Operator2)**

express   一个代表 **FormatCondition** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | XlFormatConditionType | 指定条件格式是基于单元格值还是基于表达式。 |
| Operator | 可选 | any | 一个 XlFormatConditionOperator 值，它代表条件格式运算符。如果 Type 设为 xlExpression，则忽略该参数。 |
| Formula1 | 可选 | any | 与条件格式相关联的值或表达式。可为常量值、字符串值、单元格引用或公式。 |
| Formula2 | 可选 | any | 与条件格式相关联的值或表达式。可为常量值、字符串值、单元格引用或公式。 |

## 返回值

void

## 示例


```JavaScript
/*本示例修改第一张工作表上单元格区域 E1:E10 的现有条件格式。*/
function test() {
    let formatCondition = Application.Worksheets.Item(1).Range("E1:E10").FormatConditions.Item(1)
    formatCondition.Modify(xlCellValue, xlLess, "=$B$1")
}
```


```JavaScript
/*本示例修改活动工作表上单元格区域 A1:A10 的现有条件格式。*/
function test() {
    let formatCondition = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    formatCondition.Modify(xlCellValue, xlBetween, "=3", "=9")
}
```
