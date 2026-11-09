# Document.Container

返回一个对象，该对象代表指定文档的容器应用程序。 **Object** 类型，只读。




## 语法

express.**Container**

express   一个代表 **Document** 对象的变量。

## 类型

Object

## 说明


如果指定的文档作为 OLE 对象嵌入到另一个应用程序中，则通过 **Container** 属性可以访问该文档的容器应用程序。如果一个 WPS 文档是作为 ActiveX 文档打开的（如在 WPS Office活页夹或 Internet Explorer 中打开一个 WPS 文档），则通过该属性也可访问容器应用程序中的对象模型。




## 示例


```JavaScript
/*本示例显示活动文档第一个图形的容器应用程序名。若要让本示例正常运行，则该图形必须是一个 OLE 对象。*/
Msgbox(ActiveDocument.Shapes.Item(1).OLEFormat.Object.Container.Name)
```
