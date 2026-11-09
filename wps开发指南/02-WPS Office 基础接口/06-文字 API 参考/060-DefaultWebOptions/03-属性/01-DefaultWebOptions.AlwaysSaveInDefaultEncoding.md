# DefaultWebOptions.AlwaysSaveInDefaultEncoding

如果在保存网页或纯文本文档时使用默认编码，而不管打开该文件时的原始编码如何，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AlwaysSaveInDefaultEncoding**

express   一个代表 **DefaultWebOptions** 对象的变量。

## 类型

boolean

## 说明


如果使用文件的初始编码，则该属性值为 **False** 。默认值为 **False** 。

可以使用 **[Encoding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DefaultWebOptions/member/Encoding)** 属性设置默认编码。



## 示例


```JavaScript
/*本示例将编码设置为默认编码。当用户将文档保存为网页时使用该编码。*/
function test() {
    Application.DefaultWebOptions().AlwaysSaveInDefaultEncoding = true
}
```


```JavaScript
/*本示例显示（Web全局选项）在保存网页或纯文本文档时是否使用默认编码。*/
function test() {
    alert(Application.DefaultWebOptions().AlwaysSaveInDefaultEncoding)
}
```
