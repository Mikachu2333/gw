# Options.ArabicNumeral

返回或设置一篇阿拉伯语文档的数字样式。 **WdArabicNumeral** 类型，可读写。



## 语法

express.**ArabicNumeral**

express   一个代表 **Options** 对象的变量。

## 类型

WdArabicNumeral

## 示例


```JavaScript
/*本示例把数字样式设为印地语样式。*/
function test() {
    Options.ArabicNumeral = wdNumeralHindi
}
```


```JavaScript
/*本示例显示为阿拉伯语文档指定的数字样式。*/
function test() {
    switch (Options.ArabicNumeral) {
        case wdNumeralArabic:
            alert("数字采用阿拉伯语形状。")
            break
        case wdNumeralHindi:
            alert("数字采用印地语形状。")
            break
        case wdNumeralContext:
            alert("数字形状取决于数字周围的文字。")
            break
        case wdNumeralSystem:
            alert("数字形状由系统设置决定。")
            break
    }
}
```
