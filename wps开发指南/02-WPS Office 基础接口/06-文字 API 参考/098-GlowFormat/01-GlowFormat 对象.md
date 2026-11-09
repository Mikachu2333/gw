# GlowFormat 对象

代表形状或形状区域的发光格式。


## 示例


```JavaScript
/*本示例将活动文档上第一个形状发光效果的透明度设置为不透明。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    shape.Glow.Transparency = 0
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状发光效果的辐射长度。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(1)
    alert(shape.Glow.Radius)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/GlowFormat/member/Color) | 获取一个 **ColorFormat** 对象，该对象代表发光效果的颜色。只读。 |
| [Radius](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/GlowFormat/member/Radius) | 返回或设置一个 **Single** 类型的值，该值代表发光效果的辐射长度。可读写。 |
| [Transparency](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/GlowFormat/member/Transparency) | 返回指定发光的透明度或者将其透明度设置为介于 0.0（不透明）和 1.0（透明）之间的值。可读/写 **Single** 类型。 |