# Options.AutoWordSelection

如果在拖动时，一次选定一个单词，而不是选定一个字符，则该属性为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoWordSelection**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 在拖动时不选定整个单词，而是选定单个字符。*/
function test() {
    Options.AutoWordSelection = false
}
```


```JavaScript
/*本示例显示 WPS 是否在拖动选定时一次选定一个单词，而并非选定一个字符。*/
function test() {
    alert(Options.AutoWordSelection)
}
```
