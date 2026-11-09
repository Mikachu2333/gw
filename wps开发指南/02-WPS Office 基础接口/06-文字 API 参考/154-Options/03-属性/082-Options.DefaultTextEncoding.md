# Options.DefaultTextEncoding

返回或设置一个 **MsoEncoding** 常量，该常量代表 WPS 用于所有保存为编码文本文件的文档的代码页或字符集。可读写。



## 语法

express.**DefaultTextEncoding**

express   一个代表 **Options** 对象的变量。

## 类型

MsoEncoding

## 说明


使用 **TextEncoding** 属性设置个别文档的编码。若要设置 HTML 文档的编码，请使用 **Encoding** 属性。



## 示例


```JavaScript
/*本示例将全局文本编码设为 Western 代码页，这表示 WPS 将使用 Western 代码页来保存所有编码文本文件。*/
function test() {
    Application.Options.DefaultTextEncoding = msoEncodingWestern
}
```


```JavaScript
/*本示例显示保存为编码文本文件的文档的代码页是否为 msoEncodingSimplifiedChineseGBK。*/
function test() {
    alert(Options.DefaultTextEncoding == msoEncodingSimplifiedChineseGBK)
}
```
