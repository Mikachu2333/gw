# Document.TextEncoding

返回或设置 WPS 将文档保存为文本文件的文本编码（代码页或字符集）。 **MsoEncoding** 类型，可读写。



## 语法

express.**TextEncoding**

express   一个代表 **Document** 对象的变量。

## 类型

MsoEncoding

## 说明


 **TextEncoding** 属性用不同于 HTML 编码的方式设置文本编码，用户可以用 **Encoding** 属性设置 HTML 编码。如果要对保存为文本文件的所有文档设置文本编码，可使用 **DefaultTextEncoding** 属性。



## 示例


```JavaScript
/*如果把活动文档保存为文本文件，本示例将设置活动文档的文本编码为日语。*/
function test() {
    ActiveDocument.TextEncoding = msoEncodingJapaneseShiftJIS
}
```


```JavaScript
/*本示例显示 WPS 将第一个文档保存为文本文件的文本编码是否为msoEncodingSimplifiedChineseGBK。*/
function test() {
    alert(Documents.Item(1).TextEncoding == msoEncodingSimplifiedChineseGBK)
}
```
