# WebOptions.AllowPNG

如果以网页保存文档时，允许将 PNG（可移植网络图形）作为图像格式使用，则为 **True** 。如果不允许将 PNG 作为输出格式使用，则为 **False** 。默认值是 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**AllowPNG**

express   一个代表 **WebOptions** 对象的变量。

## 类型

boolean

## 说明


如果将图像保存为 PNG 格式而非其他文件格式，则可以提高图像的质量或减小图像文件的大小，因而也就可以减少下载所需的时间，前提是所使用的 Web 浏览器支持 PNG 格式。



## 示例


```JavaScript
/*此示例使用 PNG 格式作为第一个工作簿的输出格式。*/
function test() {
    Application.Workbooks.Item(1).WebOptions.AllowPNG = true
}
```


```JavaScript
/*本示例显示活动工作簿另存为网页时是否允许 PNG 作为图像格式。*/
function test() {
    alert(ActiveWorkbook.WebOptions.AllowPNG)
}
```
