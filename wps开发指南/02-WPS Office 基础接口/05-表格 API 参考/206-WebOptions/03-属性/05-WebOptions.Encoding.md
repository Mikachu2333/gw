# WebOptions.Encoding

当查看已保存的文档时，返回或设置 Web 浏览器使用的文档编码（代码页或字符集）。默认值为系统代码页。 **MsoEncoding** 类型，可读写。



## 语法

express.**Encoding**

express   一个代表 **WebOptions** 对象的变量。

## 类型

MsoEncoding

## 说明


不能使用任何带有 **AutoDetect** 后缀的常量。这些常量由 **ReloadAs** 方法使用。



## 示例


```JavaScript
/*本示例指定将第一个工作簿中的项目保存到网页中时，使用西方文档编码。*/
function test() {
    Workbooks.Item(1).WebOptions.Encoding = msoEncodingWestern
}
```


```JavaScript
/*本示例显示活动工作簿中的项目保存到网页中时是否使用阿拉伯语文档编码。*/
function test() {
    alert(ActiveWorkbook.WebOptions.Encoding == msoEncodingArabic)
}
```
