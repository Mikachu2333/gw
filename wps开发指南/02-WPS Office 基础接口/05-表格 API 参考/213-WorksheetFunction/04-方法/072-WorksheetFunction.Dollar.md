# WorksheetFunction.Dollar

本“帮助”主题中描述的函数可将数字转换为文本格式，并应用货币符号。函数的名称及其应用的货币符号取决于您的语言设置。



## 语法

express.**Dollar(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | Number - 数字、对包含数字的单元格的引用或计算结果为数字的公式。 |
| Arg2 | 可选 | any | Decimals - 小数点右边的位数。如果 decimals 为负数，则 number 向小数点的左边舍入。如果省略 decimals，则假定其值为 2。 |

## 返回值

String

## 说明


使用 **“格式”** 菜单中的 **“单元格”** 命令来设置包含数字的单元格的格式与使用 DOLLAR 函数直接设置数字的格式之间的区别在于：DOLLAR 函数将结果转换为文本，而使用 **“单元格”** 命令设置格式的数字仍为数字。但可以继续在公式中使用由 DOLLAR 函数设置了格式的数字，因为 ET 在计算公式时会将以文本值输入的数字转换为数字。



## 示例


```JavaScript
/*本示例分别赋值B1等单元格，使用 Dollar 方法将数字转换为文本格式。*/
function test() {
    Range("B1").Value2 = 5.255
    Range("B2").Value2 = 2
    alert(WorksheetFunction.Dollar(Range("B1").Value2, Range("B2").Value2))
}
```


```JavaScript
/*本示例使用 Dollar 方法将数字转换为文本格式，并分别赋值给D1等单元格。*/
function test() {
    Range("D1").Value2 = WorksheetFunction.Dollar(755.956, -3)
    Range("D2").Value2 = WorksheetFunction.Dollar(-5.9455, 2)
}
```
