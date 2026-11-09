# BulletFormat.Font

返回一个代表字符格式的 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/obj)** 对象。只读。



## 语法

express.**Font**

express   一个代表 **BulletFormat** 对象的变量。

## 类型

Font

## 示例


```JavaScript
/*本示例为当前演示文稿第一张幻灯片的第一个形状的项目符号设置格式。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let Font = shape.TextFrame.TextRange.ParagraphFormat.Bullet.Font
    Font.Size = 48
    Font.Name = "Palatino"
    Font.Bold = true
    Font.Color.RGB = RGB(255, 127, 255)
}
```


```JavaScript
/*本示例设置第一个演示文稿的第一张幻灯片的第二个形状中项目符号的颜色和字体名称。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(2)
    let BulletFormat = shape.TextFrame.TextRange.ParagraphFormat.Bullet
    BulletFormat.Visible = true
    let font = BulletFormat.Font
    font.Name = "Palatino"
    font.Color.RGB = RGB(0, 0, 255)
}
```
