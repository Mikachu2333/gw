# TextRange2.LanguageID

获取或设置 **TextRange2** 对象的 **[MsoLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoLanguageID)** 类型的值。可读/写。



## 语法

express.**LanguageID**

express   一个代表 **TextRange2** 对象的变量。

## 类型

MsoLanguageID

## 示例


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片上第一个形状（文本框）的文本范围的 LanguageID。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let textRange2 = shape.TextFrame2.TextRange
    textRange2.LanguageID = msoLanguageIDEnglishUK
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口所选形状（文本框）的文本范围的 LanguageID 是否为 msoLanguageIDSimplifiedChinese。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let textRange2 = textFrame2.TextRange
    alert(textRange2.LanguageID == msoLanguageIDSimplifiedChinese)
}
```
