# FormatCondition.Operator

返回一个 **Long** 值，它代表条件格式的操作符。



## 语法

express.**Operator**

express   一个代表 **FormatCondition** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例判断如果第一张工作表单元格区域 E1:E10 的第一个条件格式的公式指定的是“小于 5”，则此示例将对其进行更改。*/
function test() {
    let formatCondition = Application.Worksheets.Item(1).Range("E1:E10").FormatConditions.Item(1)
    if (formatCondition.Operator == xlLess && formatCondition.Formula1 == "=5") {
        formatCondition.Modify(xlCellValue, xlBetween, "=5", "=15")
    }
}
```


```JavaScript
/*本示例显示活动工作表单元格区域 E1:E10 的第一个条件格式的操作符是否为xlLess。*/
function test() {
    let formatCondition = ActiveSheet.Range("E1:E10").FormatConditions.Item(1)
    alert(formatCondition.Operator == xlLess)
}
```
