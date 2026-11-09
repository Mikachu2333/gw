# AboveAverage.ModifyAppliesToRange

设置此格式规则所应用于的单元格区域。



## 语法

express.**ModifyAppliesToRange(Range)**

express   一个代表 **AboveAverage** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 此格式规则将应用于的区域。 |

## 返回值

void

## 说明


该区域必须采用 A1 引用样式，并全部包含在 **[FormatConditions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/obj)** 集合的父工作表内。可包括区域操作符（冒号）、相交区域操作符（空格）或合并区域操作符（逗号）。也可以使用货币符号，但会被忽略。

您也可以在区域的任意部分中使用局部定义名称，但该名称必须使用宏语言。



## 示例


```JavaScript
/*本示例设置第一张工作表上单元格区域 C1:C10 的第一个（AboveAverage）条件格式所应用于的单元格区域。*/
function test() {
    let aboveAverage = Application.Worksheets.Item(1).Range("C1:C10").FormatConditions.Item(1)
    aboveAverage.ModifyAppliesToRange(Range("C1:C4"))
}
```


```JavaScript
/*本示例设置第一张工作表上单元格区域 C1:C10 的第二个（AboveAverage）条件格式所应用于的单元格区域，并设置该条件格式的AboveBelow属性。*/
function test() {
    let aboveAverage = Application.Worksheets.Item(1).Range("C1:C10").FormatConditions.Item(2)
    aboveAverage.ModifyAppliesToRange(Range("C2:C6"))
    aboveAverage.AboveBelow = xlEqualBelowAverage
}
```
