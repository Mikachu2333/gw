# Options.SequenceCheck

如果为 **True** ，则检查南亚文本独立字符的顺序。 **Boolean** 类型，可读写。



## 语法

express.**SequenceCheck**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例启用顺序检查，使用户可以键入有效的独立字符顺序以组成南亚文本的有效字符单元格。*/
function test() {
    Options.SequenceCheck = true
}
```


```JavaScript
/*本示例判断如果检查南亚文本独立字符的顺序，则通知用户。*/
function test() {
    if (Options.SequenceCheck) {
        alert("检查南亚文本独立字符的顺序。")
    }
}
```
