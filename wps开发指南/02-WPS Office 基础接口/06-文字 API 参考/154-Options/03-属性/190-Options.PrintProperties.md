# Options.PrintProperties

如果 WPS 在文档结尾处另起一页打印文档摘要信息，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**PrintProperties**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


如果不打印文档摘要信息，则为 **False** 。可在 **“属性”** 对话框中找到摘要信息。



## 示例


```JavaScript
/*本示例设置 WPS 在文档结尾另起一页打印文档的摘要信息，然后打印活动文档。*/
function test() {
    Options.PrintProperties = true
    ActiveDocument.PrintOut()
}
```


```JavaScript
/*本示例显示 WPS 是否在文档结尾处另起一页打印文档摘要信息。*/
function test() {
    alert(Options.PrintProperties)
}
```
