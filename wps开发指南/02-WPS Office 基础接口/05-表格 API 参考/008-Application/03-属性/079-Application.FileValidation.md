# Application.FileValidation

返回或设置 ET 在打开文件前如何验证文件。可读/写。



## 语法

express.**FileValidation**

express   一个代表 **Application** 对象的变量。

## 类型

**[MsoFileValidationMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoFileValidationMode)** 

## 说明


未通过验证的文件将在 **“受保护的视图”** 窗口中打开。如果设置了 **FileValidation** 属性，该设置将在应用程序处于打开状态的整个会话期间保持有效。



## 示例


```JavaScript
/*本示例显示 ET 打开文件之前对该文件进行验证的方式是否为msoFileValidationDefault。*/
function test() {
    alert(Application.FileValidation == msoFileValidationDefault)
}
```


```JavaScript
/*本示例设置 ET 打开文件之前对该文件进行验证的方式。*/
function test() {
    Application.FileValidation = msoFileValidationSkip
}
```
