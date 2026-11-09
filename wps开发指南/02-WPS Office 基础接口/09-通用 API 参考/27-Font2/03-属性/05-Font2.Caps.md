# Font2.Caps

获取或设置一个值，该值指定文本应大写。可读写。



## 语法

express.**Caps**

express   一个代表 **Font2** 对象的变量。

## 类型

[MsoTextCaps](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTextCaps)

## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框架）中的文本以全部大写字母的形式显示。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let font2 = shape.TextFrame2.TextRange.Font
    font2.Caps = msoAllCaps
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框架）中的文本是否以不带大写字母的形式显示。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let font2 = textFrame2.TextRange.Font
    alert(font2.Caps === msoNoCaps)
}
```
