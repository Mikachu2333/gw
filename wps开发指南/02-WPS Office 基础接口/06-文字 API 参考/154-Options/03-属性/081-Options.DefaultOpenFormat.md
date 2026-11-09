# Options.DefaultOpenFormat

返回或设置打开文档的默认转换器。可为由 **OpenFormat** 属性返回的一个数字，也可为 **WdOpenFormat** 常量之一。



## 语法

express.**DefaultOpenFormat**

express   一个代表 **Options** 对象的变量。

## 类型

WdOpenFormat

## 示例


```JavaScript
/*本示例首先将 WPS 文档格式设置为打开文档的默认转换器，然后打开文档 example.docx。*/
function test() {
    Options.DefaultOpenFormat = wdOpenFormatDocument
    Documents.Open("D:\\example.docx")
}
```


```JavaScript
/*本示例将打开文档所需的默认转换器设为在打开文档时自动选用相应的文件转换器。*/
function test() {
    Options.DefaultOpenFormat = wdOpenFormatAuto
}
```
