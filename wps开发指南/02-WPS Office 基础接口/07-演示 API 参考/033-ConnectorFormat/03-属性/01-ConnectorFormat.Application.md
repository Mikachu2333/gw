# ConnectorFormat.Application

返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象，该对象表示指定对象的创建者。



## 语法

express.**Application**

express   一个代表 **ConnectorFormat** 对象的变量。

## 类型

Object

## 示例


```JavaScript
/*本示例判断应用程序名，并通知用户。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let connectorFormat = slide.Shapes.Item(2).ConnectorFormat
    if (connectorFormat.Application.Name == "Microsoft PowerPoint") {
        alert("This is a WPP Application object.")
    } else {
        alert("This is not a WPP Application object.")
    }
}
```
