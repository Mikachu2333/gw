# Presentation.ExtraColors

返回一个 **[ExtraColors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ExtraColors/obj)** 对象，该对象代表指定演示文稿中可用的其他颜色。只读。



## 语法

express.**ExtraColors**

express   一个代表 **Presentation** 对象的变量。

## 类型

ExtraColors

## 示例


```JavaScript
/*本示例在当前演示文稿的第一张幻灯片中添加一个矩形，并将其前景填充颜色设为第一种其他颜色。演示文稿中必须已定义至少一种其他颜色，否则本示例将无效。*/
function test() {
    let presentation = Application.ActivePresentation
    let shape = presentation.Slides.Item(1).Shapes.AddShape(msoShapeRectangle, 50, 50, 100, 200)
    shape.Fill.ForeColor.RGB = presentation.ExtraColors.Item(1)
}
```


```JavaScript
/*本示例为第一篇演示文稿添加额外的颜色。*/
function test() {
    Presentations.Item(1).ExtraColors.Add(msoThemeAccent1)
}
```
