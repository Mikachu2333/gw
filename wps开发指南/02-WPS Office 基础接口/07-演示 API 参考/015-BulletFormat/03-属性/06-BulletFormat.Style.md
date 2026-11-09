# BulletFormat.Style

返回或设置项目符号样式。可读/写。



## 语法

express.**Style**

express   一个代表 **BulletFormat** 对象的变量。

## 类型

[PpNumberedBulletStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/enum/PpNumberedBulletStyle)

## 说明


某些 **PpNumberedBulletStyle** 常量可能不可用，具体取决于选择或安装的语言支持（例如，美国英语）。



## 示例


```JavaScript
/*本示例将项目符号列表（由第一张幻灯片的第一个形状代表）的项目符号样式设置为彩色阴影数字，其背景为具有普通文本颜色的圆形背景。*/
function test() {
    let textFrame = ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame
    let bulletFormat = textFrame.TextRange.ParagraphFormat.Bullet
    bulletFormat.Style = ppBulletCircleNumWDBlackPlain
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片的第一个形状的项目符号样式是否为带句号的阿拉伯数字。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    let bulletFormat = shape.TextFrame.TextRange.ParagraphFormat.Bullet
    alert(bulletFormat.Style == ppBulletArabicPeriod)
}
```
