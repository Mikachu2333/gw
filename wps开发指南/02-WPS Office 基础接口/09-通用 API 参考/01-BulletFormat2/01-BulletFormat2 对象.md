# BulletFormat2 对象

代表项目符号的格式。


## 示例


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿第一张幻灯片第一个形状中段落的项目符号大小和颜色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let bulletFormat2 = shape.TextFrame2.TextRange.ParagraphFormat.Bullet
    bulletFormat2.Visible = msoTrue
    bulletFormat2.RelativeSize = 1.25
    bulletFormat2.Character = 169
    let font2 = bulletFormat2.Font
    font2.Fill.ForeColor.RGB = RGB(255, 255, 0)
    font2.Name = "Symbol"
}
```


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片上第一个形状（文本框架）中文本段落的项目符号的样式。*/
function test() {
    let textRange2 = ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame2.TextRange
    let bulletFormat2 = textRange2.ParagraphFormat.Bullet
    bulletFormat2.Style = msoBulletAlphaUCParenBoth
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Picture](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/BulletFormat2/member/Picture) | 设置要用于项目符号列表中的项目符号的图形文件。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Character](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/BulletFormat2/member/Character) | 获取或设置在指定文本中用作项目符号的 Unicode 字符值。可读写。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/BulletFormat2/member/Font) | 获取代表 **BulletFormat2** 对象的字符格式的 **Font2** 对象。只读。 |
| [Number](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/BulletFormat2/member/Number) | 获取段落的项目符号数目。只读。 |
| [RelativeSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/BulletFormat2/member/RelativeSize) | 返回或设置项目符号相对于段落中第一个文本字符的大小。可读写。 |
| [StartValue](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/BulletFormat2/member/StartValue) | 获取或设置项目符号列表的开始值。可读写。 |
| [Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/BulletFormat2/member/Style) | 返回或设置代表项目符号样式的常数。可读写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/BulletFormat2/member/Type) | 获取和设置代表项目符号类型的常数。可读写。 |
| [UseTextColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/BulletFormat2/member/UseTextColor) | 决定是否将指定项目符号设置为段落中第一个文本字符的颜色。可读写。 |
| [UseTextFont](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/BulletFormat2/member/UseTextFont) | 决定是否将指定项目符号设置为段落中第一个文本字符的字体。可读写。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/BulletFormat2/member/Visible) | 获取或设置指定项目符号是否可见的值。可读写。 |