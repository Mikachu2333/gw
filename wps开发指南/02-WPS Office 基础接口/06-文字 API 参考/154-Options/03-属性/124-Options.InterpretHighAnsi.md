# Options.InterpretHighAnsi

返回或设置高端 ANSI 字符译码方式。 **WdHighAnsiText** 类型，可读写。



## 语法

express.**InterpretHighAnsi**

express   一个代表 **Options** 对象的变量。

## 类型

WdHighAnsiText

## 示例


```JavaScript
/*本示例设置 WPS 将所有高端 ANSI 字符译码为东亚字符。*/
function test() {
    Options.InterpretHighAnsi = wdHighAnsiIsFarEast
}
```


```JavaScript
/*本示例显示 WPS 如何解释高端 ANSI 字符。*/
function test() {
    switch (Options.InterpretHighAnsi) {
        case wdHighAnsiIsFarEast:
            alert("WPS 将所有高端 ANSI 字符译码为东亚字符。")
            break
        case wdHighAnsiIsHighAnsi:
            alert("WPS 不将任何高端 ANSI 字符译码为东亚字符。")
            break
        case wdAutoDetectHighAnsiFarEast:
            alert("只有在 WPS 自动检测到东亚语言文字时，WPS 才将高端 ANSI 字符译码为东亚语言字符。")
            break
    }
}
```
