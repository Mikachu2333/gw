# DefaultWebOptions.Encoding

当查看已保存的文档时，返回或设置 Web 浏览器使用的文档编码（代码页或字符集）。默认值为系统代码页。 **MsoEncoding** 类型，可读写。



## 语法

express.**Encoding**

express   一个代表 **DefaultWebOptions** 对象的变量。

## 类型

MsoEncoding

## 说明


不能使用任何带有 **AutoDetect** 后缀的常量。这些常量由 **ReloadAs** 方法使用。



## 示例


```JavaScript
/*本示例检查默认编码方式是否为 msoEncodingWestern，然后设置相应的 strDocEncoding 字符串。*/
function test() {
    if (Application.DefaultWebOptions.Encoding == msoEncodingWestern) {
        strDocEncoding = "Western"
    } else {
        strDocEncoding = "Other"
    }
}
```


```JavaScript
/*本示例设置 Web 浏览器的默认文档编码方式为 msoEncodingCyrillic。*/
function test() {
    Application.DefaultWebOptions.Encoding = msoEncodingCyrillic
}
```
