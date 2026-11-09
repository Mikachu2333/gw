# Application.Options

返回一个 **[Options](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/obj)** 对象，该对象代表 WPS 中的应用程序设置。



## 语法

express.**Options**

express   一个代表 **Application** 对象的变量。

## 类型

Options

## 示例


```JavaScript
/*本示例禁用快速保存功能，然后保存活动文档。*/
function test() {
    Application.Options.AllowFastSave = false
    ActiveDocument.Save()
}
```


```JavaScript
/*本示例打印“example.docx”文档及其批注和域结果。*/
function test() {
    Application.Options.PrintFieldCodes = false
    Application.Options.PrintComments = true
    Application.Documents.Item("example.docx").PrintOut()
}
```
