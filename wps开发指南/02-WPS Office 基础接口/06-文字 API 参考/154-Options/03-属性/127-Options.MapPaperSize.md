# Options.MapPaperSize

如果为 **True** ，则自动调整采用其他国家/地区标准纸张大小（例如 A4）的文档格式，以便按照用户所在国家/地区的标准纸张大小（例如，信纸）正确打印该文档。 **Boolean** 类型，可读写。



## 语法

express.**MapPaperSize**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


本属性只影响您的文档的打印输出，文档的格式不变。



## 示例


```JavaScript
/*本示例允许 WPS 根据国家/地区设置调整纸张大小。*/
function test() {
    Options.MapPaperSize = true
}
```


```JavaScript
/*本示例显示 WPS 是否根据国家/地区设置调整纸张大小。*/
function test() {
    alert(Options.MapPaperSize)
}
```
