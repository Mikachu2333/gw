# Document.EncryptionProvider

返回一个 **String** 类型的值，该值指定 WPS 在对文档进行加密时使用的算法加密提供程序的名称。可读写。



## 语法

express.**EncryptionProvider**

express   一个代表 **Document** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例在光标处插入 WPS 对活动文档进行加密时使用的算法加密提供程序的名称。*/
function test() {
    Selection.TypeText(ActiveDocument.EncryptionProvider)
}
```


```JavaScript
/*本示例设置 WPS 对第一个文档进行加密时使用的算法加密提供程序的名称。*/
function test() {
    Documents.Item(1).EncryptionProvider = "Microsoft RSA SChannel Cryptographic Provider"
}
```
