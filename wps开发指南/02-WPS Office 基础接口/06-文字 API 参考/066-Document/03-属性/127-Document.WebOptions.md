# Document.WebOptions

将文档另存为网页或打开网页时，该属性将返回 **[WebOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/obj)** 对象，该对象包含 WPS 所用的文档属性。只读。



## 语法

express.**WebOptions**

express   一个代表 **Document** 对象的变量。

## 类型

WebOptions

## 示例


```JavaScript
/*本示例指定在将活动文档另存为网页时，使用级联样式表和西文文档编码。*/
function test() {
    let webOptions = ActiveDocument.WebOptions
    webOptions.RelyOnCSS = true
    webOptions.Encoding = msoEncodingWestern
}
```


```JavaScript
/*本示例显示当第一个文档另存为网页时该网页的目标屏幕尺寸是否为 800x600 像素。*/
function test() {
    alert(Documents.Item(1).WebOptions.ScreenSize == msoScreenSize800x600)
}
```
