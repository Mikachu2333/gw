# UniqueValues.ModifyAppliesToRange

设置此格式规则所应用于的单元格区域。



## 语法

express.**ModifyAppliesToRange(Range)**

express   一个代表 **UniqueValues** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 此格式规则将应用于的区域。 |

## 返回值

void

## 说明


该区域必须采用 A1 引用样式，并全部包含在 **FormatConditions** 集合的父工作表内。可包括区域操作符（冒号）、相交区域操作符（空格）或合并区域操作符（逗号）。也可以使用货币符号，但会被忽略。

您也可以在区域的任意部分中使用局部定义名称，但该名称必须使用宏语言。



## 示例


```JavaScript
/*本示例设置第一张工作表上单元格区域 A1:A10 的第一个（UniqueValues）条件格式所应用于的单元格区域，并设置该条件格式内部的颜色。*/
function test() {
    let uniqueValues = Application.Worksheets.Item(1).Range("A1:A10").FormatConditions.Item(1)
    uniqueValues.ModifyAppliesToRange(Range("A7:A10"))
    uniqueValues.Interior.ColorIndex = 7
}
```


```JavaScript
/*本示例设置活动工作表上单元格区域 A1:A10 的第二个（UniqueValues）条件格式所应用于的单元格区域，并将该条件格式的特定文本的字体设置为加粗和倾斜。*/
function test() {
    let uniqueValues = ActiveSheet.Range("A1:A10").FormatConditions.Item(2)
    uniqueValues.ModifyAppliesToRange(Range("A2:A4"))
    uniqueValues.Font.Bold = true
    uniqueValues.Font.Italic = true
}
```
