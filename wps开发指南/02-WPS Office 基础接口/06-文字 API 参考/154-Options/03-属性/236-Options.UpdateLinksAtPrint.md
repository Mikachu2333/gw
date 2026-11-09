# Options.UpdateLinksAtPrint

如果 WPS 在打印文档前更新指向其他文件的嵌入链接，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**UpdateLinksAtPrint**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将 WPS 设置为在打印文档前更新指向其他文件的嵌入链接，然后打印活动文档。*/
function test() {
    Options.UpdateLinksAtPrint = true
    ActiveDocument.PrintOut()
}
```


```JavaScript
/*本示例显示 WPS 在打印文档前是否更新指向其他文件的嵌入链接。*/
function test() {
    alert(Options.UpdateLinksAtPrint)
}
```
