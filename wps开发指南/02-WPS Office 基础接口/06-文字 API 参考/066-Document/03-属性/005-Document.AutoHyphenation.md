# Document.AutoHyphenation

如果代表指定文档已启动自动断字功能，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoHyphenation**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例启动自动断字功能，断字区为 0.25 英寸。全为大写的单词不断字。*/
function test() {
    ActiveDocument.HyphenationZone = InchesToPoints(0.25)
    ActiveDocument.HyphenateCaps = false
    ActiveDocument.AutoHyphenation = true
}
```


```JavaScript
/*本示例判断第一个文档是否启用自动断字功能，并通知用户。*/
function test() {
    if (Documents.Item(1).AutoHyphenation) {
        alert("第一个文档启用自动断字功能")
    } else {
        alert("第一个文档未启用自动断字功能")
    }
}
```
