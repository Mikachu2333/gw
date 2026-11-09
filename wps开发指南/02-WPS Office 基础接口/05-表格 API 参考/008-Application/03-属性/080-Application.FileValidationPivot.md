# Application.FileValidationPivot

返回或设置 ET 将如何验证数据透视表的数据缓存的内容。可读/写。



## 语法

express.**FileValidationPivot**

express   一个代表 **Application** 对象的变量。

## 类型

**[XlFileValidationPivotMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlFileValidationPivotMode)** 

## 说明


包含未验证的数据缓存的文件将在 **“受保护的视图”** 窗口中打开。如果设置 **FileValidationPivot** 属性，该设置将在应用程序处于打开状态的整个会话期间保持有效。



## 示例


```JavaScript
/*本示例显示 ET 验证数据透视表的数据缓存的内容的方式是否为xlFileValidationPivotDefault。*/
function test() {
    alert(Application.FileValidationPivot == xlFileValidationPivotDefault)
}
```


```JavaScript
/*本示例设置 ET 验证数据透视表的数据缓存的内容的方式。*/
function test() {
    Application.FileValidationPivot = xlFileValidationPivotRun
}
```
