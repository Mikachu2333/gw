# ShadowFormat.Application

返回表示指定对象的创建者的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象。



## 语法

express.**Application**

express   一个代表 **ShadowFormat** 对象的变量。

## 类型

Object

## 示例


```JavaScript
/*本示例判断应用程序名，并通知用户。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shadowFormat = slide.Shapes.Item(1).Shadow
    if (shadowFormat.Application.Name == "Microsoft PowerPoint") {
        alert("This is a WPP Application object.")
    } else {
        alert("This is not a WPP Application object.")
    }
}
```
