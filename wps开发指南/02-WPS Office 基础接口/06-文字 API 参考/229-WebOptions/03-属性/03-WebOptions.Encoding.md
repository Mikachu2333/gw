# WebOptions.Encoding

返回或设置在查看保存的文档时 Web 浏览器使用的文档编码（代码页或字符集）。 **MsoEncoding** 类型，可读写。



## 语法

express.**Encoding**

express   一个代表 **WebOptions** 对象的变量。

## 类型

MsoEncoding

## 示例


```JavaScript
/*本示例判断默认编码方式是否为 Western，然后设置相应的 strDocEncoding 字符串。*/
function test() {
    let strDocEncoding = ""
    if (Application.DefaultWebOptions.Encoding == msoEncodingWestern) {
        strDocEncoding = "Western"
    } else {
        strDocEncoding = "Other"
    }
}
```


```JavaScript
/*本示例设置在查看已保存为网页的第一个文档时 Web 浏览器要使用的文档编码为msoEncodingSimplifiedChineseAutoDetect。*/
function test() {
    Documents.Item(1).WebOptions.Encoding = msoEncodingSimplifiedChineseAutoDetect
}
```
