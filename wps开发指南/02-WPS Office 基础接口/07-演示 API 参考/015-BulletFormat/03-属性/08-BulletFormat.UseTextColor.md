# BulletFormat.UseTextColor

确定是否将指定项目符号设置为段落中第一个文本字符的颜色。可读/写。



## 语法

express.**UseTextColor**

express   一个代表 **BulletFormat** 对象的变量。

## 类型

MsoTriState

## 说明


不能直接将此属性设置为 **msoFalse** 。设置项目符号格式颜色（使用 **Font** 对象的 **[Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/member/Color)** 属性）可将此属性设置为 **msoFalse** 。当 **UseTextColor** 为 **msoFalse** 时，可将其设为 **msoTrue** 以将项目符号格式重置为默认颜色。

 **UseTextColor** 属性的值可以是下列 **MsoTriState** 常量之一。

| 常量           | 说明                           |
| ------------ | ---------------------------- |
| **msoFalse** | 指定的项目符号设置为其他任何颜色。            |
| **msoTrue**  | 指定的项目符号的颜色设置为该段落中第一个文本字符的颜色。 |



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片第二个形状中的项目符号重置为默认的字符、字体和颜色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    let BulletFormat = shape.TextFrame.TextRange.ParagraphFormat.Bullet
    BulletFormat.RelativeSize = 1
    BulletFormat.UseTextColor = msoTrue
    BulletFormat.UseTextFont = msoTrue
    BulletFormat.Character = 8226
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片的第一个形状是否将项目符号设置为段落中第一个文本字符的颜色。*/
function test() {
    let textFrame = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).TextFrame
    let bulletFormat = textFrame.TextRange.ParagraphFormat.Bullet
    alert(bulletFormat.UseTextColor == msoTrue)
}
```
