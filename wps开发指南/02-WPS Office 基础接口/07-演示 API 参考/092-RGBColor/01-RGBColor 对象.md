# RGBColor 对象

代表配色方案中的一种颜色。

## 说明


使用 [ **Colors** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorScheme/member/Colors) 方法可返回一个 **RGBColor** 对象。可以将一个 **RGBColor** 对象赋给另一个 **RGBColor** 对象。可使用 [ **RGB** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RGBColor/member/RGB) 属性设置或返回 **RGBColor** 对象的明确的红-绿-蓝值，对于由 **RGBColor** 和 **ppNotSchemeColor** 常量定义的 **ppSchemeColorMixed** 对象除外。可返回这两个对象的 **RGB** 属性，但不能对其进行设置。


## 示例


```JavaScript
/*本示例将活动演示文稿中颜色方案 1 中的背景颜色设置为红色，并将标题颜色设置为颜色方案 2 定义的标题颜色。*/
function test() {
    let colorSchemes = ActivePresentation.ColorSchemes
    colorSchemes.Item(1).Colors(ppBackground).RGB = RGB(255, 0, 0)
    colorSchemes.Item(1).Colors(ppTitle).RGB = colorSchemes.Item(2).Colors(ppTitle).RGB
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中指定配色方案的颜色是否为黑色。*/
function test() {
    let colorScheme = ActivePresentation.Slides.Item(1).ColorScheme
    alert(colorScheme.Colors(ppForeground).RGB == RGB(0, 0, 0))
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [RGB](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RGBColor/member/RGB) | 与 **PpColorSchemeIndex** 常量一同使用时，返回或设置指定配色方案颜色或其他颜色的红-绿-蓝（RGB）值。可读/写。 |