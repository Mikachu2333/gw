# WorksheetFunction.Hex2Dec

将十六进制数转换为十进制数。



## 语法

express.**Hex2Dec(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Number - 要转换的十六进制数。Number 不能多于 10 个字符（40 位）。最高位为符号位，其余 39 位为数字位。负数用二进制数的补码表示。 |

## 返回值

String

## 说明


如果 number 不是有效的十六进制数，则 HEX2DEC 将返回错误值 #NUM!。



## 示例


```JavaScript
/*本示例使用 Hex2Dec 方法分别将十六进制数1212转换为十进制数和十六进制数“14BA”转换为十进制数，并分别赋值给A2和A3单元格。*/
function test() {
    Range("A2").Value2 = WorksheetFunction.Hex2Dec(1212)
    Range("A3").Value2 = WorksheetFunction.Hex2Dec("14BA")
}
```


```JavaScript
/*本示例为C1单元格赋值，使用 Hex2Dec 方法将C1单元格中十六进制数转换为十进制数。*/
function test() {
    Range("C1").Value2 = 1234
    alert(WorksheetFunction.Hex2Dec(Range("C1").Value2))
}
```
