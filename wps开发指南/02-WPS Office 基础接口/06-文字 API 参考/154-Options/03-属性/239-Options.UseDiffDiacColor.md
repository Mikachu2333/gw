# Options.UseDiffDiacColor

如果可以设置当前文档中音调符号的颜色，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**UseDiffDiacColor**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在设置选定内容中的音调符号的颜色前，检查 UseDiffDiacColor 属性的值。*/
function test() {
    if (Options.UseDiffDiacColor) {
        Selection.Font.DiacriticColor = wdColorBlue
    }
}
```


```JavaScript
/*本示例禁止设置当前文档中音调符号的颜色。*/
function test() {
    Application.Options.UseDiffDiacColor = false
}
```
