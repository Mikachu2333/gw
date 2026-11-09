# WorksheetFunction.Rept

按照给定的次数重复显示文本。可以通过函数 REPT 来不断地重复显示某一文本字符串，对单元格进行填充。



## 语法

express.**Rept(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | string | Text - 要重复的文本。 |
| Arg2 | 必选 | number（double 精度） | Number\_times - 指定文本重复次数的一个正数。 |

## 返回值

String

## 说明


* 如果 number\_times 为 0（零），则 REPT 将返回 ""（空文本）。
* 如果 number\_times 不是整数，则将被截尾取整。
* REPT 函数的结果不能大于 32,767 个字符，否则 REPT 将返回错误值 #VALUE!。



## 示例


```JavaScript
/*本示例使用 Rept 方法分别重复显示“加油”3次和“欢迎”5次，并分别赋值给B1和B2单元格。*/
function test() {
    Range("B1").Value2 = WorksheetFunction.Rept("加油", 3)
    Range("B2").Value2 = WorksheetFunction.Rept("欢迎", 5)
}
```


```JavaScript
/*本示例为C1等单元格赋值，使用 Rept 方法按照D1单元格给定的次数重复显示C1单元格中的文本。*/
function test() {
    Range("C1").Value2 = "欢迎您！"
    Range("D1").Value2 = 2
    alert(WorksheetFunction.Rept(Range("C1").Value2, Range("D1").Value2))
}
```
