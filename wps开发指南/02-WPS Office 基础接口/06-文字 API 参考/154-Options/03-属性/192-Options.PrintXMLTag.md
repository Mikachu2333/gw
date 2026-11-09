# Options.PrintXMLTag

返回一个 **Boolean** 类型的值，该值代表打印文档时是否打印 XML 标记。



## 语法

express.**PrintXMLTag**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 说明


如果为 **True** ，则代表打印标记。如果为 **False** ，则代表不打印标记。



## 示例


```JavaScript
/*本示例设置 WPS 打印文档的同时打印 XML 标记。*/
function test() {
    Options.PrintXMLTag = true
}
```


```JavaScript
/*本示例判断如果 WPS 打印文档的同时打印 XML 标记，则通知用户。*/
function test() {
    if (Options.PrintXMLTag) {
        alert("WPS 打印文档的同时打印 XML 标记。")
    }
}
```
