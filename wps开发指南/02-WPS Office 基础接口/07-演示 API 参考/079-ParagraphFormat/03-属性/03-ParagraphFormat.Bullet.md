# ParagraphFormat.Bullet

返回一个 **[BulletFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/BulletFormat/obj)** 对象，该对象代表指定段落格式的项目符号格式设置。只读。



## 语法

express.**Bullet**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

BulletFormat

## 示例


```JavaScript
/*本示例为活动演示文稿中第一张幻灯片的第二个形状中的段落设置项目符号大小和颜色。*/
function test() {
    let textFrame = ActivePresentation.Slides.Item(1).Shapes.Item(2).TextFrame
    let bulletFormat = textFrame.TextRange.ParagraphFormat.Bullet
    bulletFormat.Visible = msoTrue
    bulletFormat.RelativeSize = 1.25
    bulletFormat.Font.Color.RGB = RGB(255, 0, 255)
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的标题文本框中的文本段落项目符号的类型是否为ppBulletNumbered。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let paragraphFormat = slide.Shapes.Title.TextFrame.TextRange.ParagraphFormat
    alert(paragraphFormat.Bullet.Type == ppBulletNumbered)
}
```
