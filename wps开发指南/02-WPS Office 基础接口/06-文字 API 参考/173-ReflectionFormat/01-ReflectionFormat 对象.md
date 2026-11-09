# ReflectionFormat 对象

代表形状或形状区域的反射格式。


## 示例


```JavaScript
/*本示例设置活动文档上第二个形状内的文本框的字体字号、字体类型以及反射效果。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(2)
    shape.TextFrame.TextRange.Font.Size = 32
    shape.TextFrame.TextRange.Font.Name = "Palatino"
    shape.TextFrame.TextRange.Font.Reflection.Type = msoReflectionType6
}
```


```JavaScript
/*本示例设置活动文档上第一个形状的反射效果的透明度。*/
function test() {
    let rftFormat = ActiveDocument.Shapes.Item(1).Reflection
    rftFormat.Transparency = 0.5
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Blur](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ReflectionFormat/member/Blur) | 返回或设置 **Single** 类型值，该值指定应用于指定对象的虚化效果程度。可读/写。 |
| [Offset](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ReflectionFormat/member/Offset) | 返回或设置反射图像与形状的分离量（以磅为单位）。可读/写。 |
| [Size](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ReflectionFormat/member/Size) | 以反射形状的百分比形式返回或设置反射的大小，其值介于 0 到 100 之间。可读/写。 |
| [Transparency](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ReflectionFormat/member/Transparency) | 返回或设置反射效果的透明度，其值为从 0.0（不透明）到 1.0（全透明）。可读/写 **Single** 类型。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ReflectionFormat/member/Type) | 获取或设置 **ReflectionFormat** 对象的类型。可读/写。 |