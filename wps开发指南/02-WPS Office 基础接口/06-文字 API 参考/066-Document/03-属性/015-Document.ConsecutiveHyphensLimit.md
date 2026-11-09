# Document.ConsecutiveHyphensLimit

返回或设置以连字符结束的连续行的最大数目。 **Long** 类型，可读写。



## 语法

express.**ConsecutiveHyphensLimit**

express   一个代表 **Document** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果将 **ConsecutiveHyphensLimit** 属性设置为 0（零），则以连字符结束的连续行可以是任何数目。



## 示例


```JavaScript
/*本示例为第一个文档设置自动断字功能并将以连字符结束的连续行的数目限制为 2 个。*/
function test() {
    let document = Documents.Item(1)
    document.AutoHyphenation = true
    document.ConsecutiveHyphensLimit = 2
}
```


```JavaScript
/*本示例不限制以连字符结束的连续行的数目。*/
function test() {
    ActiveDocument.ConsecutiveHyphensLimit = 0
}
```
