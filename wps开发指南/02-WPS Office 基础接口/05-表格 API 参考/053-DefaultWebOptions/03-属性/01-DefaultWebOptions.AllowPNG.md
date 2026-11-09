# DefaultWebOptions.AllowPNG

如果以网页保存文档时，允许将 PNG（可移植网络图形）作为图像格式使用，则为 **True** 。如果不允许将 PNG 作为输出格式使用，则为 **False** 。默认值是 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AllowPNG**

express   一个代表 **DefaultWebOptions** 对象的变量。

## 类型

boolean

## 说明


如果将图像保存为 PNG 格式而非其他文件格式，则可以提高图像的质量或减小图像文件的大小，因而也就可以减少下载所需的时间，前提是所使用的 Web 浏览器支持 PNG 格式。



## 示例


```JavaScript
/*此示例新建文档的应用程序可以将 PNG 作为全局默认设置。*/
function test() {
    Application.DefaultWebOptions.AllowPNG = true
}
```


```JavaScript
/*此示例显示新建文档的应用程序是否可以将 PNG 作为全局默认设置。*/
function test() {
    alert(Application.DefaultWebOptions.AllowPNG)
}
```
