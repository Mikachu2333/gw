# Options.UpdateLinksAtOpen

如果 WPS 在打开文档时自动更新嵌入的所有 OLE 链接，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**UpdateLinksAtOpen**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将 WPS 设置为在打开文档时自动更新嵌入的 OLE 链接。*/
function test() {
    Options.UpdateLinksAtOpen = true
}
```


```JavaScript
/*本示例显示 WPS 在打开文档时是否自动更新嵌入的所有 OLE 链接。*/
function test() {
    alert(Options.UpdateLinksAtOpen)
}
```
