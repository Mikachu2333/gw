# Options.DiacriticColorVal

返回或设置用于从右向左语言文档中的音调符号的 24 位颜色。可读写。



## 语法

express.**DiacriticColorVal**

express   一个代表 **Options** 对象的变量。

## 类型

WdColor

## 说明


此属性可以是任何有效的 **WdColor** 常量或 JavaScript 的 **RGB** 函数返回的值。必须将 **UseDiffDiacColor** 属性的值设为 **True** 才能使用此属性。



## 示例


```JavaScript
/*本示例将音调字符的颜色设为鲜绿色。*/
function test() {
    if (Options.UseDiffDiacColor) {
        Options.DiacriticColorVal = wdColorBrightGreen
    }
}
```


```JavaScript
/*本示例显示音调字符的颜色是否为红色。*/
function test() {
    alert(Options.DiacriticColorVal == wdColorRed)
}
```
