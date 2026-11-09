# WorksheetFunction.SumIfs

对区域中满足多个条件的单元格求和。



## 语法

express.**SumIfs(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | Range | Sum\_range - 要求和的区域。 |
| Arg2 | 必选 | Range | Criteria\_range1, criteria\_range2, ... - 一个或多个区域，要在其中计算相关的条件。 |
| Arg3 | 必选 | any | Arg30 - Criteria1, criteria2, ... - 定义哪些单元格将被相加求和的一个或多个条件，其形式可以为数字、表达式、单元格引用或文本。例如，条件可以表示为 32、"32"、">32"、"apples" 或 B4。 |

## 返回值

Double

## 说明


* 只有每个单元格对应的所有指定条件都为 True，才会对 sum\_range 中的每个单元格求和。
* sum\_range 中包含 TRUE 的单元格作为 1 计算；sum\_range 中包含 FALSE 的单元格作为 0（零）计算。
* 可以在 criteria 中使用通配符，包括问号 (?) 和星号 (\*)。问号可匹配任意的单个字符；星号可匹配任意一串字符。如果要查找实际的问号或星号，则请在该字符前键入一个波形符 (\~)。
* 每个 criteria\_range 的大小和形状不必与 sum\_range 相同。实际进行求和的单元格按以下方法确定：将 criteria\_range 的左上角单元格作为开始单元格，然后将与 sum\_range 的大小和形状对应的所有单元格包含到其中。例如：  
| 如果 sum\_range 为 | criteria\_range 为 | 则实际纳入计算的单元格为 |  
| --------------- | ----------------- | ------------ |  
| A1:A5           | B1:B5             | B1:B5        |  
| A1:A5           | B1:B3             | B1:B5        |  
| A1:B4           | C1:D4             | C1:D4        |  
| A1:B4           | C1:C2             | C1:D4        |



## 示例


```JavaScript
/*本示例对区域中满足条件的单元格求和，并将结果赋值给D1单元格。*/
function test() {
    Range("D1").Value2 = Application.WorksheetFunction.SumIfs(Range("B1:B8"), Range("A1:A8"), "JavaScript")
}
```


```JavaScript
/*本示例显示对区域中满足多个条件的单元格求和。*/
function test() {
    alert(Application.WorksheetFunction.SumIfs(Range("B1:B9"), Range("A1:A9"), "Python", Range("C1:C9"), "优秀"))
}
```
