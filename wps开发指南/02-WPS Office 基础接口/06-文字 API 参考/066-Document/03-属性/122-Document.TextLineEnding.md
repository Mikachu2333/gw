# Document.TextLineEnding

返回或设置一个 **WdLineEndingType** 常量，该常量代表 WPS 在保存为文本文件的文档中标记换行符和段落分隔符的方式。可读写。



## 语法

express.**TextLineEnding**

express   一个代表 **Document** 对象的变量。

## 类型

WdLineEndingType

## 示例


```JavaScript
/*将活动文档保存为文本文件时，本示例将为该活动文档中的换行符或段落分隔符输入回车。*/
function test() {
    ActiveDocument.TextLineEnding = wdCROnly
}
```


```JavaScript
/*此示例显示将第一个文档保存为文本文件时标记换行符和段落分隔符的方式是否为wdCRLF。*/
function test() {
    alert(Documents.Item(1).TextLineEnding == wdCRLF)
}
```
