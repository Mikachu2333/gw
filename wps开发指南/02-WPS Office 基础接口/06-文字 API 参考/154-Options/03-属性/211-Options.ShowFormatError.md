# Options.ShowFormatError

如果为 **True** ，WPS 通过在文本（该文本的格式与文档中使用频繁的其他格式相似）下加弯曲下划线来标记不一致的格式。 **Boolean** 类型，可读写。



## 语法

express.**ShowFormatError**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例使 WPS 可以保留文档中格式的修订，但不在文本下显示弯曲的下划线。*/
function test() {
    Options.FormatScanning = true  //Enables keeping track of formatting
    Options.ShowFormatError = false
}
```


```JavaScript
/*本示例判断如果 WPS 通过在文本下加弯曲下划线来标记不一致的格式，则通知用户。*/
function test() {
    if (Options.ShowFormatError) {
        alert("WPS 通过在文本下加弯曲下划线来标记不一致的格式。")
    }
}
```
