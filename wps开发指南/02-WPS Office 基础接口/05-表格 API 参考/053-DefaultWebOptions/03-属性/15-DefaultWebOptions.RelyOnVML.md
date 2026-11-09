# DefaultWebOptions.RelyOnVML

如果为 **True** ，将文档保存为网页时，图形对象不能生成图像文件。如果为 **False** ，则可生成图像文件。默认值是 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**RelyOnVML**

express   一个代表 **DefaultWebOptions** 对象的变量。

## 类型

boolean

## 说明


如果您的 Web 浏览器支持 Vector Markup Language (VML)，也可不从图形对象生成图像，这样可减少文件大小。例如，Internet Explorer 5 支持此项功能，因此如果要将其作为目标浏览器，应该将 **RelyOnVML** 属性设为 **True** 。如果浏览器不支持 VML，则在查看用此属性保存的网页时，将不会显示图像。

例如，如果网页中使用了已生成的图像文件，并且文档保存的位置与该网页在 Web 服务器上的最终位置不同，则不应生成图像。



## 示例


```JavaScript
/*此示例指定（Web全局选项）在将文档保存为网页时，生成图像。*/
function test() {
    Application.DefaultWebOptions.RelyOnVML = false
}
```


```JavaScript
/*此示例显示（Web全局选项）将文档保存为网页时是否生成图像。*/
function test() {
    alert(!Application.DefaultWebOptions.RelyOnVML)
}
```
