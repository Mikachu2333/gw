# WorksheetFunction.SumIf

根据给定条件对指定单元格求和。



## 语法

express.**SumIf(Arg1, Arg2, Arg3)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | Range | Range - 要根据条件对其进行计算的单元格区域。 |
| Arg2 | 必选 | any | Criteria - 定义哪些单元格将被相加求和的条件，其形式可以为数字、表达式或文本。例如，条件可以表示为 32、"32"、">32" 或 "apples"。 |
| Arg3 | 可选 | any | Sum\_range - 要相加的实际单元格（如果 range 中对应的单元格符合条件）。如果省略 sum\_range，则将根据条件对 range 中的单元格进行计算，并在符合条件的情况下对它们相加求和。 |

## 返回值

Double

## 说明


* Sum\_range 的大小和形状不必与 range 相同。实际进行相加求和的单元格确定方法如下：将 sum\_range 中左上角的单元格作为开始单元格，然后将与 range 的大小和形状对应的单元格包含到其中。例如：  
| 如果 range 为 | sum\_range 为 | 则实际纳入计算的单元格为 |  
| ---------- | ------------ | ------------ |  
| A1:A5      | B1:B5        | B1:B5        |  
| A1:A5      | B1:B3        | B1:B5        |  
| A1:B4      | C1:D4        | C1:D4        |  
| A1:B4      | C1:C2        | C1:D4        |
* 可以在 criteria 中使用通配符，包括问号 (?) 和星号 (\*)。问号可匹配任意的单个字符；星号可匹配任意一串字符。如果要查找实际的问号或星号，则请在该字符前键入一个波形符 (\~)。



## 示例


```JavaScript
/*此示例显示区域A1:A8中大于5的和。*/
function test() {
    alert(Application.WorksheetFunction.SumIf(Range("A1:A8"), "> 5"))
}
```


```JavaScript
/*本示例将给定区域中单元格小于等于3求和，并赋值给C1单元格。*/
function test() {
    Range("C1").Value2 = Application.WorksheetFunction.SumIf(Range("A1:A5"), "<= 3", Range("B1:B3"))
}
```
