# WorksheetFunction.Bin2Dec

将二进制数转换为十进制数。



## 语法

express.**Bin2Dec(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | 要转换的二进制数。Number 不能多于 10 个字符（10 位）。最高位为符号位，其余 9 位为数字位。负数用二进制数的补码表示。 |

## 返回值

String

## 说明


如果 number 不是有效的二进制数或多于 10 个字符（10 位），则 Bin2Dec 将生成一个错误值。



## 示例


```JavaScript
/*本示例使用Bin2Dec方法将二进制数转换为十进制数，并将结果赋值于A2等单元格。*/
function test() {
    Range("A2").Value2 = Application.WorksheetFunction.Bin2Dec(1100100)
    Range("A3").Value2 = Application.WorksheetFunction.Bin2Dec(11101)
    Range("A4").Value2 = Application.WorksheetFunction.Bin2Dec(1001010)
    Range("A5").Value2 = Application.WorksheetFunction.Bin2Dec(10)
}
```


```JavaScript
/*本示例为C3等单元格分别赋值，并使用Bin2Dec方法将二进制数转换为十进制数。*/
function test() {
    Range("C3").Value2 = 1100
    Range("C4").Value2 = 101101
    Range("C5").Value2 = 1001111
    let bin2dec1 = Application.WorksheetFunction.Bin2Dec(Range("C3").Value2)
    let bin2dec2 = Application.WorksheetFunction.Bin2Dec(Range("C4").Value2)
    let bin2dec3 = Application.WorksheetFunction.Bin2Dec(Range("C5").Value2)
    alert(bin2dec1)
    alert(bin2dec2)
    alert(bin2dec3)
}
```
