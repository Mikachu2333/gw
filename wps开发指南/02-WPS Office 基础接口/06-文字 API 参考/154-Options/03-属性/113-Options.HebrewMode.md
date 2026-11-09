# Options.HebrewMode

返回或设置希伯来语拼写检查工具的模式。 **WdHebSpellStart** 类型，可读写。



## 语法

express.**HebrewMode**

express   一个代表 **Options** 对象的变量。

## 类型

WdHebSpellStart

## 示例


```JavaScript
/*本示例设置拼写检查工具在进行拼写检查时，遵循希伯来语言学院规定的包含音调符号的文字的常规书写规则。*/
function test() {
    Options.HebrewMode = wdFullScript
}
```


```JavaScript
/*本示例显示希伯来语拼写检查是否遵循仅用于带音调符号的文字的传统书写规则。*/
function test() {
    alert(Options.HebrewMode == wdPartialScript)
}
```
