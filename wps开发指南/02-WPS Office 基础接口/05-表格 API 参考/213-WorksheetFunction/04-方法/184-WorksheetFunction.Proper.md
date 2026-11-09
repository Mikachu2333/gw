# WorksheetFunction.Proper

将文本字符串的首字母及任何非字母字符之后的首字母转换成大写。将其余的字母转换成小写。



## 语法

express.**Proper(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | string | Text - 用引号括起来的文本、返回文本的公式或是对包含要进行部分大写转换的文本的单元格引用。 |

## 返回值

String

## 示例


```JavaScript
/*本示例使用 Proper 方法将字符串WorksheetFunction和HELLO的首字母及任何非字母字符之后的首字母转换成大写，并分别赋值给B1和B2单元格。*/
function test() {
    Range("B1").Value2 = WorksheetFunction.Proper("WorksheetFunction")
    Range("B2").Value2 = WorksheetFunction.Proper("HELLO")
}
```


```JavaScript
/*本示例为A1单元格赋值，使用 Proper 方法将A1单元格中字符串的首字母及任何非字母字符之后的首字母转换成大写。*/
function test() {
    Range("A1").Value2 = "worksheet"
    alert(WorksheetFunction.Proper(Range("A1").Value2))
}
```
