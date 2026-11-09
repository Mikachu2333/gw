# Options.ShowControlCharacters

如果显示当前文档中的双向控制符，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowControlCharacters**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在当前文档中隐藏双向控制符。*/
function test() {
    Options.ShowControlCharacters = false
}
```


```JavaScript
/*本示例判断如果显示当前文档中的双向控制符，则通知用户。*/
function test() {
    if (Options.ShowControlCharacters) {
        alert("显示当前文档中的双向控制符。")
    }
}
```
