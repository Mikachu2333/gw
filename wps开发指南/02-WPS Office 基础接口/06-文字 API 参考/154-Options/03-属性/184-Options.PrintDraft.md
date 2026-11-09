# Options.PrintDraft

如果 WPS 以最简单的格式打印文档，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**PrintDraft**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


不是所有的打印机都支持草稿输出。



## 示例


```JavaScript
/*本示例将 WPS 设置为使用草稿输出，然后打印活动文档。*/
function test() {
    Options.PrintDraft = true
    ActiveDocument.PrintOut()
}
```


```JavaScript
/*本示例显示 WPS 是否使用草稿输出。*/
function test() {
    alert(Options.PrintDraft)
}
```
