# ReflectionFormat 对象

代表 Office 图形中的反射效果。


## 示例


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片的第二个（文本框）形状中文本字体的大小和名称，并设置该文本字体的反射图像的类型。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    let font2 = shape.TextFrame2.TextRange.Font
    font2.Size = 32
    font2.Name = "Palatino"
    font2.Reflection.Type = msoReflectionType6
}
```


```JavaScript
/*本示例运行于演示组件，设置活动窗口选定形状的反射图像的模糊量和间隔量（以磅为单位）。*/
function test() {
    let reflectionFormat = ActiveWindow.Selection.ShapeRange.Reflection
    reflectionFormat.Blur = 3
    reflectionFormat.Offset = 4
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Blur](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ReflectionFormat/member/Blur) | 获取或设置形状的反射图像的模糊程度（以磅为单位）。可读/写。 |
| [Offset](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ReflectionFormat/member/Offset) | 获取或设置形状的反射图像的间隔量（以磅为单位）。可读/写。 |
| [Size](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ReflectionFormat/member/Size) | 获取或设置形状的反射图像的大小（以百分数为单位）。可读/写。 |
| [Transparency](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ReflectionFormat/member/Transparency) | 获取或设置形状的反射图像的透明度（以百分数为单位）。可读/写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ReflectionFormat/member/Type) | 获取或设置 **ReflectionFormat** 对象的类型。可读/写。 |