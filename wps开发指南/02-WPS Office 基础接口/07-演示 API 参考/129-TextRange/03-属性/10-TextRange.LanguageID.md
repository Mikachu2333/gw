# TextRange.LanguageID

返回或设置指定文本范围的语言。可读/写。



## 语法

express.**LanguageID**

express   一个代表 **TextRange** 对象的变量。

## 类型

MsoLanguageID

## 说明


 **LanguageID** 属性用于标记使用不同于 **[DefaultLanguageID](#TODO)** 属性所指定的语言编写的文本部分。这使得 WPP 可根据每个文本范围的语言检查拼写和语法。此属性与应用程序界面语言无关。

 **LanguageID** 属性的值可以是 **[MsoLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoLanguageID)** 常量之一。



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片中第一个形状的文本的语言设置为美国英语。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.TextFrame.TextRange.LanguageID = msoLanguageIDEnglishUS
}
```


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片中第二个形状的第一个字符的语言是否为简体中文。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    let textRange = shape.TextFrame.TextRange.Characters(1, 1)
    alert(textRange.LanguageID == msoLanguageIDSimplifiedChinese)
}
```
