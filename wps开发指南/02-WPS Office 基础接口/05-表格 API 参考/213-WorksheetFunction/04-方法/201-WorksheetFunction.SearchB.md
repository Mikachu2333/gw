# WorksheetFunction.SearchB

SEARCH 和 SEARCHB 查找一个文本字符串内的另一个文本字符串，并返回一个数字，表示从文本字符串（从中查找另一个文本字符串）的第一个字符起开始查找的第一个文本字符串的起始位置。



## 语法

express.**SearchB(Arg1, Arg2, Arg3)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | string | Find\_text - 要查找的文本。 |
| Arg2 | 必选 | string | Within\_text - 要在其中搜索 find\_text 的文本。 |
| Arg3 | 可选 | any | Start\_num - 在 within\_text 中要从其开始搜索的字符编号。 |

## 返回值

Double

## 说明


SEARCH 用于使用单字节字符集 (SBCS) 的语言，而 SEARCHB 用于使用双字节字符集 (DBCS) 的语言。计算机上的默认语言设置会以下列方式影响返回值：

* 无论默认语言设置如何，SEARCH 始终将每个字符（单字节或双字节）作为 1 个字符计算。
* 当启用了支持 DBCS 的语言编辑，并将其设置为默认语言时，SEARCHB 会将每个双字节字符作为 2 个字符计算。否则，SEARCHB 将把每个字符作为 1 个字符计算。

 支持 DBCS 的语言包括日语、中文（简体）、中文（繁体）和朝鲜语。

* 使用 SEARCH 和 SEARCHB 可确定字符或文本字符串在其他文本字符串中的位置，以便可以使用 MID 和 MIDB 或 REPLACE 和 REPLACEB 函数更改文本。
* SEARCH 和 SEARCHB 不区分大小写。如果希望进行区分大小写的搜索，可以使用 FIND 和 FINDB。
* 可以在 find\_text 中使用通配符，包括问号 (?) 和星号 (\*)。问号可匹配任意的单个字符；星号可匹配任意一串字符。如果要查找实际的问号或星号，则请在该字符前键入一个波形符 (\~)。
* 如果找不到 find\_text，则返回错误值 #VALUE!。
* 如果省略 start\_num，则假定其值为 1。
* 如果 start\_num 不大于 0（零）或大于 within\_text 的长度，则返回错误值 #VALUE!。
* 使用 start\_num 可跳过指定数量的字符。以 SEARCH 为例，假设要处理文本字符串“AYF0093.YoungMensApparel”。要在文本字符串的说明部分中查找第一个“Y”的编号，请将 start\_num 设置为 8，这样就不会搜索文本的序列号部分。SEARCH 从第 8 个字符开始，在下一个字符处查找 find\_text，并返回数字 9。SEARCH 总是返回从 within\_text 的起始位置计算的字符的编号，如果 start\_num 大于 1，则会计算跳过的字符。



## 示例


```JavaScript
/*本示例使用 SearchB 方法计算第一个文本字符串从第二个文本字符串的第一个字符开始位置的编号，并分别赋值给D1和D2单元格。*/
function test() {
    Range("D1").Value2 = WorksheetFunction.SearchB("符", "第一个文本字符")
    Range("D2").Value2 = WorksheetFunction.SearchB("符", "第二个文本字符串的第一个字符", 14)
}
```


```JavaScript
/*本示例为A1等单元格赋值，使用 SearchB 方法计算第一个文本字符串从第二个文本字符串的第一个字符开始位置的编号。*/
function test() {
    Range("A1").Value2 = "How are you?"
    Range("B1").Value2 = "r"
    alert(WorksheetFunction.SearchB(Range("B1").Value2, Range("A1").Value2))
}
```
