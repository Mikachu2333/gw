# GroupShapes.Application

返回一个 **Application** 对象，该对象表示指定对象的创建者。



## 语法

express.**Application**

express   一个代表 **GroupShapes** 对象的变量。

## 类型

Object

## 示例


```JavaScript
/*本示例判断应用程序名，并通知用户。*/
function test() {
    let groupShapes = ActivePresentation.Slides.Item(1).Shapes.Item(1).GroupItems
    if (groupShapes.Application.Name == "Microsoft PowerPoint") {
        alert("This is a WPP Application object.")
    } else {
        alert("This is not a WPP Application object.")
    }
}
```
