# WorksheetFunction.Asc

对于双字节字符集 (DBCS) 语言，将全角（双字节）字符更改为半角（单字节）字符。



## 语法

express.**Asc(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | string | 文本或对包含要更改的文本的单元格的引用。如果文本中不包含任何全角字母，则文本不会更改。 |

## 返回值

String

## 示例


```JavaScript
/*本示例为C3等单元格分别赋值，并使用Asc方法将全角字符更改为半角字符。*/
function test() {
    Range("C3").Value2 = "Hello，World！"
    Range("C4").Value2 = "Hi，How are you?"
    Range("C5").Value2 = "Fine，thank you！"
    let asc1 = Application.WorksheetFunction.Asc(Range("C3").Value2)
    let asc2 = Application.WorksheetFunction.Asc(Range("C4").Value2)
    let asc3 = Application.WorksheetFunction.Asc(Range("C5").Value2)
    alert(asc1)
    alert(asc2)
    alert(asc3)
}
```


```JavaScript
/*本示例使用Asc方法将全角字符更改为半角字符，并将结果赋值于J3等单元格。*/
function test() {
    Range("J3").Value2 = Application.WorksheetFunction.Asc("apple，banana，pear。")
    Range("J4").Value2 = Application.WorksheetFunction.Asc("red；blue；purple。")
    Range("J5").Value2 = Application.WorksheetFunction.Asc("mark：Hello！")
}
```
