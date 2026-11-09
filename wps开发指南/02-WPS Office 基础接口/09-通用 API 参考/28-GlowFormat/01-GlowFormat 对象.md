# GlowFormat 对象

代表 Office 图形周围的发光效果。


## 示例


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片上第二个形状（文本框）中文本字体的发光效果的颜色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    let font2 = shape.TextFrame2.TextRange.Font
    font2.Glow.Color.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片的第一个形状的发光效果的主题颜色和透明度。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.Glow.Color.ObjectThemeColor = msoThemeColorAccent5
    shape.Glow.Transparency = 0.6
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/GlowFormat/member/Color) | 获取一个 **ColorFormat** 对象，该对象代表格式设置为发光的文本的颜色。只读。 |
| [Radius](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/GlowFormat/member/Radius) | 获取或设置 **GlowFormat** 对象发光效果的半径值。可读写。 |
| [Transparency](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/GlowFormat/member/Transparency) | 返回指定发光的透明度或者将其透明度设置为介于 0.0（不透明）和 1.0（透明）之间的值。可读/写。 |