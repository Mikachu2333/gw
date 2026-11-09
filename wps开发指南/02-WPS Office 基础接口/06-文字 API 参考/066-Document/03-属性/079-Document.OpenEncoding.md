# Document.OpenEncoding

返回用于打开指定文档的编码。 **MsoEncoding** 类型，只读。



## 语法

express.**OpenEncoding**

express   一个代表 **Document** 对象的变量。

## 类型

MsoEncoding

## 示例


```JavaScript
/*本示例判断活动文档是否使用编码 UTF7 打开。*/
function test() {
    if (ActiveDocument.OpenEncoding == msoEncodingUTF7) {
        alert("This is a UTF7-encoded text file!")
    } else {
        alert("This is not a UTF7-encoded text file!")
    }
}
```


```JavaScript
/*本示例显示用于打开第一个文档的编码是否为msoEncodingUnicodeLittleEndian。*/
function test() {
    alert(Documents.Item(1).OpenEncoding == msoEncodingUnicodeLittleEndian)
}
```
