# FormatCondition.Formula1

返回与条件格式或者数据有效性相关联的值或表达式。可为常量值、字符串值、单元格引用或公式。 **String** 型，只读。



## 语法

express.**Formula1**

express   一个代表 **FormatCondition** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例判断如果第一张工作表单元格区域 E1:E10 的第一个条件格式的公式指定的是“小于 5”，则此示例将对其进行更改。*/
function test() {
    let formatCondition = Application.Worksheets.Item(1).Range("E1:E10").FormatConditions.Item(1)
    if (formatCondition.Operator == xlLess && formatCondition.Formula1 == "=5") {
        formatCondition.Modify(xlCellValue, xlLess, "=10")
    }
}
```


```JavaScript
/*本示例显示活动工作表上区域 A1:A10 中第一个条件格式的第一部分的表达式。*/
function test() {
    let formatCondition = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    alert(formatCondition.Formula1)
}
```
