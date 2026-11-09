# WorksheetFunction.NumberValue

以独立于区域设置的方式将文本转换为数字。



## 语法

express.**NumberValue(Arg1, Arg2, Arg3)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | string | 表示要转换的数字的字符串。 |
| Arg2 | 必选 | string | 用作字符串中小数分隔符的字符。 |
| Arg3 | 必选 | string | 用作字符串中的组分隔符的字符。 |

## 返回值

Double

## 示例


```JavaScript
/*本示例使用 NumberValue 方法以独立于区域设置的方式将文本转换为数字，并分别赋值给B2和B3单元格。*/
function test() {
    Range("B2").Value2 = WorksheetFunction.NumberValue("12.45,69", ",", ".")
    Range("B3").Value2 = WorksheetFunction.NumberValue("12,34%", ",", ";")
}
```


```JavaScript
/*本示例为A1等单元格分别赋值，使用 NumberValue 方法以独立于区域设置的方式将文本转换为数字。*/
function test() {
    Range("A1").Value2 = "23,45.56"
    Range("A2").Value2 = "."
    Range("A3").Value2 = ","
    alert(WorksheetFunction.NumberValue(Range("A1").Value2, Range("A2").Value2, Range("A3").Value2))
}
```
