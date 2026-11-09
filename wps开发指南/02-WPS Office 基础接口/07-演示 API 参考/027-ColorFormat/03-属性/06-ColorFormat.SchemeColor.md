# ColorFormat.SchemeColor

返回或设置已经应用的配色方案中的颜色，该配色方案与指定对象相关联。为向后兼容而提供。对于新版，请改用 **[ObjectThemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/member/ObjectThemeColor)** 属性。可读/写 **PpColorSchemeIndex** 类型。



## 语法

express.**SchemeColor**

express   一个代表 **ColorFormat** 对象的变量。

## 类型

PpColorSchemeIndex

## 说明


 **SchemeColor** 属性的值可以是下列 **PpColorSchemeIndex** 常量之一：

| 常量 |
| ------------------------------------------------- |
| **ppAccent1**                                         |
| **ppAccent2**                                         |
| **ppAccent3**                                         |
| **ppBackground**                                      |
| **ppFill**                                            |
| **ppForeground**                                      |
| **ppNotSchemeColor**                                  |
| **ppSchemeColorMixed**                                |
| **ppShadow**                                          |
| **ppTitle**                                           |



## 示例


```JavaScript
/*本示例切换活动演示文稿中第一张幻灯片的两种背景色，一种是明确的红-绿-蓝值所定义的颜色，另一种是配色方案的背景色。*/
function test() {
    let slide = Application.ActivePresentation.Slides.Item(1)
    slide.FollowMasterBackground = false
    let colorFormat = slide.Background.Fill.ForeColor
    if (colorFormat.Type == msoColorTypeScheme) {
        colorFormat.RGB = RGB(0, 128, 128)
    } else {
        colorFormat.SchemeColor = ppBackground
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿第一张幻灯片中第二个形状阴影格式的前景色配色方案颜色是否为ppShadow。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(2)
    let colorFormat = shape.Shadow.ForeColor
    alert(colorFormat.SchemeColor == ppShadow)
}
```
