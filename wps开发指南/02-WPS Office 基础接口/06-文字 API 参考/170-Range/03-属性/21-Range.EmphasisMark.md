# Range.EmphasisMark

返回或设置字符或指定的字符串的着重号。 **WdEmphasisMark** 类型，可读写。



## 语法

express.**EmphasisMark**

express   一个代表 **Range** 对象的变量。

## 类型

WdEmphasisMark

## 示例


```JavaScript
/*本示例在活动文档的第四个单词的上面设置着重号（逗号）。*/
function test() {
    ActiveDocument.Words.Item(4).EmphasisMark = wdEmphasisMarkOverComma
}
```


```JavaScript
/*本示例显示所选内容是否没有着重号。*/
function test() {
    alert(Selection.Range.EmphasisMark == wdEmphasisMarkNone)
}
```
