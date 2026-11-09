# FormatColor.Application

如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。




## 语法

express.**Application**

express   一个代表 **FormatColor** 对象的变量。

## 类型

Application

## 说明


您可以将此属性与 OLE 自动化对象一起使用以返回该对象的应用程序。




## 示例


```JavaScript
function test() {
    let myObject = Application.ActiveWorkbook
    if(myObject.Application.Value == "ET") {
        alert("This is an ET Application object.")
    }
    else {
        alert("This is not an ET Application object.")
    }
}
```
