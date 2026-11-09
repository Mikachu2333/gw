# Application.DefaultWebOptions

返回 **[DefaultWebOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DefaultWebOptions/obj)** 对象，该对象包含应用程序级的全局属性，当以网页保存文档或打开网页时，ET 会使用这些属性。只读。



## 语法

express.**DefaultWebOptions**

express   一个代表 **Application** 对象的变量。

## 类型

DefaultWebOptions

## 示例


```JavaScript
/*本示例检验文档编码的默认设置是否为“Western”，然后设置相应字符串 strDocEncoding。*/
function test() {
    let strDocEncoding
    if (Application.DefaultWebOptions.Encoding == msoEncodingWestern) {
        strDocEncoding = "Western"
    } else {
        strDocEncoding = "Other"
    }
}
```


```JavaScript
/*本示例设置允许在ET中打开文档时以PNG格式加载图像，在保存文档前不更新链接。*/
function test() {
    Application.DefaultWebOptions.LoadPictures = true
    Application.DefaultWebOptions.AllowPNG = true
    Application.DefaultWebOptions.UpdateLinksOnSave = false
}
```
