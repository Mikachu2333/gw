# WebOptions.AllowPNG

如果为 **True** ，则在将文档另存为网页时，允许把 PNG（可移植网络图形）作为图像格式。如果此属性为 **False** ，则不允许 PNG 为输出格式。默认值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**AllowPNG**

express   一个代表 **WebOptions** 对象的变量。

## 类型

boolean

## 说明


如果以 PNG 格式保存图像，并且所用的 Web 浏览器支持 PNG 格式，则有可能提高图像的质量或者减小这些图像文件的大小，从而减少下载时间。



## 示例


```JavaScript
/*本示例启用 PNG 作为活动文档的输出格式。*/
function test() {
    ActiveDocument.WebOptions.AllowPNG = true
}
```


```JavaScript
/*本示例显示当第一个文档另存到网页时是否允许 PNG 作为该文档的输出格式。*/
function test() {
    alert(Documents.Item(1).WebOptions.AllowPNG)
}
```
