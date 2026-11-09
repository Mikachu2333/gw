# Shapes.Application

返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象，该对象表示指定对象的创建者。



## 语法

express.**Application**

express   一个代表 **Shapes** 对象的变量。

## 类型

Object

## 示例


```JavaScript
/*本示例显示第一篇演示文稿的第一张幻灯片中形状集合的应用程序名。*/
function test() {
    let shapes = Presentations.Item(1).Slides.Item(1).Shapes
    alert(shapes.Application.Name)
}
```
