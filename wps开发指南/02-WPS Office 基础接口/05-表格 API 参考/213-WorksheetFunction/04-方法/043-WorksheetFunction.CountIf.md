# WorksheetFunction.CountIf

计算区域中满足给定条件的单元格的个数。



## 语法

express.**CountIf(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | Range | 要计算其中满足条件的单元格个数的单元格区域。 |
| Arg2 | 必选 | any | 用于定义哪些单元格将被计算在内的条件，其形式可以为数字、表达式、单元格引用或文本。例如，条件可以表示为 32、"32"、">32"、"apples" 或 B4。 |

## 返回值

Double

## 说明


* 可以在条件中使用通配符，包括问号 (?) 和星号 (\*)。问号可匹配任意的单个字符；星号可匹配任意一串字符。如果要查找实际的问号或星号，则请在该字符前键入一个波形符 (\~)。



## 示例


```JavaScript
/*本示例为B3等单元格分别赋值，并使用CountIf方法计算区域中满足给定条件的单元格的个数。*/
function test() {
    Range("B3").Value2 = "苹果"
    Range("B4").Value2 = "西瓜"
    Range("B5").Value2 = "猕猴桃"
    Range("B6").Value2 = "西瓜"
    Range("B7").Value2 = "桃子"
    let countif1 = Application.WorksheetFunction.CountIf(Range("B2:B7"), "西瓜")
    alert(countif1)
}
```


```JavaScript
/*本示例为E2等单元格分别赋值，并使用CountIf方法计算区域中满足给定条件的单元格的个数，并将结果赋值于C3单元格。*/
function test() {
    Range("E2").Value2 = 20
    Range("E3").Value2 = 20.1
    Range("E4").Value2 = 15
    Range("E5").Value2 = 40
    Range("E6").Value2 = 78
    Range("C3").Value2 = Application.WorksheetFunction.CountIf(Range("E2:E6"), ">20")
}
```
