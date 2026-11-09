# WebOptions.RelyOnVML

如果在将文档另存为网页时没有从图形对象中生成图像文件，则该属性值为 **True** 。如果生成了图像，则该属性值为 **False** 。默认值为 **False** 。可读写 **Boolean** 类型。



## 语法

express.**RelyOnVML**

express   一个代表 **WebOptions** 对象的变量。

## 类型

boolean

## 说明


如果您的 Web 浏览器支持矢量标记语言 (VML)，只要不从图形对象中生成图像，即可减小文件大小。例如，Internet Explorer 支持此功能，因此如果要将其作为目标浏览器，应该将 **RelyOnVML** 属性设为 **True** 。如果浏览器不支持 VML，则在查看启用此属性时保存的网页时，将不会显示图像。

如果您的网页使用以前生成的图像文件，或者文档的保存位置与该网页在 Web 服务器上的最终存储位置不同，则不会生成图像。



## 示例


```JavaScript
/*本示例指定在将文档另存为网页时生成图像。*/
function test() {
    ActiveDocument.WebOptions.RelyOnVML = false
}
```


```JavaScript
/*本示例判断当第一个文档另存为网页时是否从图形对象中生成图像文件，并通知用户。*/
function test() {
    if (!Documents.Item(1).WebOptions.RelyOnVML) {
        alert("文档另存为网页时从图形对象中生成图像文件")
    } else {
        alert("文档另存为网页时未从图形对象中生成图像文件")
    }
}
```
