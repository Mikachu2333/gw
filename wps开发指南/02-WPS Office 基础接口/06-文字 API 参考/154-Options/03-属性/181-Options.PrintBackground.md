# Options.PrintBackground

如果 WPS 在后台打印，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**PrintBackground**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将 WPS 设置为在后台打印文档，然后打印活动文档。*/
function test() {
    Options.PrintBackground = true
    ActiveDocument.PrintOut()
}
```


```JavaScript
/*本示例显示 WPS 是否在后台打印文档。*/
function test() {
    alert(Options.PrintBackground)
}
```
