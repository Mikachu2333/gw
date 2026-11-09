# DefaultWebOptions.Encoding

返回或设置在查看保存的文档时 Web 浏览器使用的文档编码（代码页或字符集）。 **MsoEncoding** 类型，可读写。



## 语法

express.**Encoding**

express   一个代表 **DefaultWebOptions** 对象的变量。

## 类型

MsoEncoding

## 示例


```JavaScript
/*本示例检查默认编码方式是否为 Western，然后设置相应的 strDocEncoding 字符串。*/
function test() {
    let strDocEncoding = null
    if (Application.DefaultWebOptions().Encoding == msoEncodingWestern) {
        strDocEncoding = "Western"
    } else {
        strDocEncoding = "Other"
    }
}
```


```JavaScript
/*本示例设置在查看保存的文档时 Web 浏览器使用的文档默认编码为阿拉伯语。*/
function test() {
    Application.DefaultWebOptions().Encoding = msoEncodingArabic
}
```
