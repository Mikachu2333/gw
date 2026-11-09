# BulletFormat 对象

代表项目符号的格式。

## 说明


使用 [ **Bullet** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ParagraphFormat/member/Bullet) 属性返回 **BulletFormat** 对象。


## 示例


```JavaScript
/*本示例为当前演示文稿第一张幻灯片上第二个形状设置段落的项目符号大小和颜色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    let BulletFormat = shape.TextFrame.TextRange.ParagraphFormat.Bullet
    BulletFormat.Visible = true
    BulletFormat.RelativeSize = 1.25
    BulletFormat.Character = 169
    BulletFormat.Font.Color.RGB = RGB(255, 255, 0)
    BulletFormat.Font.Name = "Symbol"
}
```


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片的第一个形状的项目符号样式。*/
function test() {
    let textFrame = ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame
    let bulletFormat = textFrame.TextRange.ParagraphFormat.Bullet
    bulletFormat.Style = ppBulletCircleNumWDWhitePlain
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Picture](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/BulletFormat/member/Picture) | 当 **BulletFormat** 对象的 **[Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/BulletFormat/member/Type)** 属性设置为 **ppBulletPicture** 时，此方法可设置用于项目符号列表中的项目符号的图形文件。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Character](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/BulletFormat/member/Character) | 返回或设置在指定文本中用作项目符号的 Unicode 字符值。可读/写。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/BulletFormat/member/Font) | 返回一个代表字符格式的 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/obj)** 对象。只读。 |
| [Number](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/BulletFormat/member/Number) | 当 **BulletFormat** 对象的 **[Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/BulletFormat/member/Type)** 属性设置为 **ppBulletNumbered** 时，返回段落的项目符号编号。只读。 |
| [RelativeSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/BulletFormat/member/RelativeSize) | 返回或设置项目符号相对于段落中第一个文本字符的大小。可读/写。 |
| [StartValue](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/BulletFormat/member/StartValue) | 当 **BulletFormat** 对象的 **[Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/BulletFormat/member/Type)** 属性设为 **ppBulletNumbered** 时，返回或设置项目符号列表的起始值。可读/写。 |
| [Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/BulletFormat/member/Style) | 返回或设置项目符号样式。可读/写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/BulletFormat/member/Type) | 代表项目符号的类型。可读/写。 |
| [UseTextColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/BulletFormat/member/UseTextColor) | 确定是否将指定项目符号设置为段落中第一个文本字符的颜色。可读/写。 |
| [UseTextFont](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/BulletFormat/member/UseTextFont) | 确定是否将指定项目符号设置为段落中第一个文本字符的字体。可读/写。 |