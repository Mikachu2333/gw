# Document.SaveEncoding

返回或设置保存文档时使用的编码。 **MsoEncoding** 类型，可读写。



## 语法

express.**SaveEncoding**

express   一个代表 **Document** 对象的变量。

## 类型

MsoEncoding

## 示例


```JavaScript
/*本示例指定用西方编码保存当前文档。*/
function test() {
    ActiveDocument.SaveEncoding = msoEncodingWestern
}
```


```JavaScript
/*本示例显示保存第一个文档时使用的编码是否为msoEncodingSimplifiedChineseGBK。*/
function test() {
    alert(Documents.Item(1).SaveEncoding == msoEncodingSimplifiedChineseGBK)
}
```
