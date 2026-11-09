# WebOptions.RelyOnCSS

如果在 Web 浏览器中查看保存的文档时使用级联样式表（CSS）设置字体格式，则该属性值为 **True** 。默认值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**RelyOnCSS**

express   一个代表 **WebOptions** 对象的变量。

## 类型

boolean

## 说明


WPS 将创建一个级联样式表文件，并根据 **[OrganizeInFolder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/member/OrganizeInFolder)** 属性的值将其保存在指定文件夹中或网页所在的文件夹中。如果使用 HTML \<FONT\> 标记和级联样式表，则该属性值为 **False** 。

如果 Web 浏览器支持级联样式表，则应将此属性设置为 **True** 。这样就可以更精确控制网页上的版式和格式，使其与文档外观更相似（即与在 WPS 中的外观相似）。



## 示例


```JavaScript
/*本示例当活动文档另存为网页时将级联样式表用于字体格式设置。*/
function test() {
    ActiveDocument.WebOptions.RelyOnCSS = true
}
```


```JavaScript
/*本示例判断如果第一个文档另存为网页时将级联样式表用于字体格式设置，则通知用户。*/
function test() {
    if (Documents.Item(1).WebOptions.RelyOnCSS) {
        alert("级联样式表用于字体格式设置")
    }
}
```
