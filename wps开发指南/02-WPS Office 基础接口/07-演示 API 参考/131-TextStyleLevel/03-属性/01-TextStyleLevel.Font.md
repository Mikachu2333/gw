# TextStyleLevel.Font

返回一个代表字符格式的 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/obj)** 对象。只读。



## 语法

express.**Font**

express   一个代表 **TextStyleLevel** 对象的变量。

## 类型

Font

## 示例


```JavaScript
/*本示例设置活动演示文稿的幻灯片母版的正文样式中第一个大纲级别的字体格式。*/
function test() {
    let textStyle = ActivePresentation.SlideMaster.TextStyles.Item(ppBodyStyle)
    let font = textStyle.Levels.Item(1).Font
    font.Size = 48
    font.Name = "Palatino"
    font.Bold = msoTrue
    font.Color.RGB = RGB(255, 127, 255)
}
```


```JavaScript
/*本示例设置活动演示文稿的备注母版的正文样式中第一个大纲级别的项目符号和文本的字体名称和字体颜色。*/
function test() {
    let textStyle = ActivePresentation.NotesMaster.TextStyles.Item(ppBodyStyle)
    textStyle.TextFrame.TextRange.ParagraphFormat.Bullet.Visible = msoTrue
    let font = textStyle.Levels.Item(1).Font
    font.Name = "Palatino"
    font.Color.RGB = RGB(0, 0, 255)
}
```
