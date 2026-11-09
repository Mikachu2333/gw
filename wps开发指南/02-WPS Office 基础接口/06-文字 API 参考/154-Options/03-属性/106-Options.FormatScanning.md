# Options.FormatScanning

如果为 **True** ，则 WPS 对文档中的所有格式进行跟踪。 **Boolean** 类型，可读写。



## 语法

express.**FormatScanning**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


启用 **FormatScanning** 属性允许您识别文档中所有单独的格式，这样您可以方便地将相同的格式应用于新文本，并快速替换或修改文档中出现的所有给定的格式。



## 示例


```JavaScript
/*本示例启用 WPS 对文档中格式的跟踪，但禁止在文字下方显示波浪下划线，这些文字的格式类似于文档中使用频率更高的其他格式。*/
function test() {
    Options.FormatScanning = true
    Options.ShowFormatError = false  //Disables displaying squiggly underline
}
```


```JavaScript
/*本示例判断如果 WPS 对文档中的所有格式进行跟踪。则通知用户。*/
function test() {
    if (Options.FormatScanning) {
        alert("WPS 对文档中的所有格式进行跟踪。")
    }
}
```
