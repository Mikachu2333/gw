# Application.DefaultWebOptions

返回 **[DefaultWebOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DefaultWebOptions/obj)** 对象，该对象包含 WPS 每当将文档保存为网页或打开网页时使用的应用程序级全局属性。



## 语法

express.**DefaultWebOptions()**

express   一个代表 **Application** 对象的变量。

## 返回值

DefaultWebOptions

## 示例


```JavaScript
/*本示例检查文档编码的默认设置是否为“西方”，然后根据检查结果设置 strDocEncoding 字符串。*/
function test() {
    let strDocEncoding = ""
    if (Application.DefaultWebOptions().Encoding == msoEncodingWestern) {
        strDocEncoding = "Western"
    } else {
        strDocEncoding = "Other"
    }
}
```


```JavaScript
/*本示例将所选内容的文本替换为将文档另存为网页时使用的文件夹后缀。*/
function test() {
    Selection.Range.Text = Application.DefaultWebOptions().FolderSuffix
}
```
