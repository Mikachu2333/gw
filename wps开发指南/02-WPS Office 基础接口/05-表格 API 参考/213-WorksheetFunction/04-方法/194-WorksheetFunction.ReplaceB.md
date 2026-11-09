# WorksheetFunction.ReplaceB

REPLACEB 根据指定的字节数用一个文本字符串替换另一个文本字符串中的部分字符。



## 语法

express.**ReplaceB(Arg1, Arg2, Arg3, Arg4)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | string | Old\_text - 要替换其中部分字符的文本。 |
| Arg2 | 必选 | number（double 精度） | Start\_num - 要用 new\_text 替换的 old\_text 中字符的位置。 |
| Arg3 | 必选 | number（double 精度） | Num\_chars -（要让 REPLACE 用 new\_text 替换的）old\_text 中的字符的个数。 |
| Arg4 | 必选 | string | New\_text - 用于替换 old\_text 中的字符的文本。 |

## 返回值

String

## 说明


REPLACE 用于使用单字节字符集 (SBCS) 的语言，而 REPLACEB 用于使用双字节字符集 (DBCS) 的语言。计算机上的默认语言设置会以下列方式影响返回值：

* 无论默认语言设置是什么，REPLACE 始终将每个字符（单字节或双字节）作为 1 个字符计算。
* 如果启用了某种支持 DBCS 的语言的编辑，然后将这种语言设置为默认语言，则 REPLACEB 将每个双字节字符作为 2 个字符计算；否则，REPLACEB 将每个字符作为 1 个字符计算。

支持 DBCS 的语言包括日语、中文（简体）、中文（繁体）和朝鲜语。



## 示例


```JavaScript
/*本示例使用 ReplaceB 方法根据指定的字节数，将文本字符串的一部分替换为其他文本字符串，并赋值给D2和D3单元格。*/
function test() {
    Range("D2").Value2 = WorksheetFunction.ReplaceB("你来自哪里？", 9, 2, "个国家")
    Range("D3").Value2 = WorksheetFunction.ReplaceB("Where are you from?", 1, 5, "Which country")
}
```


```JavaScript
/*本示例为A1等单元格赋值，使用 ReplaceB 方法根据指定的字节数，将文本字符串的一部分替换为其他文本字符串。*/
function test() {
    Range("A1").Value2 = "您好！欢迎您加入人工智能研发部！"
    Range("B1").Value2 = 17
    Range("C1").Value2 = 8
    Range("D1").Value2 = "WPS"
    alert(WorksheetFunction.ReplaceB(Range("A1").Value2, Range("B1").Value2, Range("C1").Value2, Range("D1").Value2))
}
```
