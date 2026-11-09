# WorksheetFunction.Substitute

在文本字符串中用 new\_text 替代 old\_text。如果需要在某一文本字符串中替换指定的文本，请使用函数 SUBSTITUTE；如果需要在某一文本字符串中替换指定位置处的任意文本，请使用函数 REPLACE。



## 语法

express.**Substitute(Arg1, Arg2, Arg3, Arg4)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | string | Text - 要替换其中字符的文本，或对含有要替换其中字符的文本的单元格的引用。 |
| Arg2 | 必选 | string | old\_text - 要替换的文本。 |
| Arg3 | 必选 | string | New\_text - 要用于替换 old\_text 的文本。 |
| Arg4 | 可选 | any | Instance\_num - 指定要用 new\_text 替换 old\_text 的第几个匹配项。如果指定了 instance\_num，则只有 old\_text 的该实例被替换；否则将用 new\_text 替换 text 中出现的所有 old\_text 的匹配项。 |

## 返回值

String

## 示例


```JavaScript
/*本示例使用 Substitute 方法在文本字符串中用新文本替代旧文本，并分别赋值给C4和C5单元格。*/
function test() {
    Range("C4").Value2 = WorksheetFunction.Substitute("你好，欢迎你的加入", "你的加入", "你")
    Range("C5").Value2 = WorksheetFunction.Substitute("你好，欢迎你的加入", "你", "大家", 2)
}
```


```JavaScript
/*本示例为A3单元格赋值，使用 Substitute 方法在文本字符串中用 “金山办公” 替代 “wps”。*/
function test() {
    Range("A3").Value2 = "这是wps的研发部门"
    alert(WorksheetFunction.Substitute(Range("A3").Value2, "wps", "金山办公"))
}
```
