# TextStyle.TextFrame

返回一个 **[TextFrame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/obj)** 对象，该对象包含指定形状或母版文本样式的对齐方式和定位属性。



## 语法

express.**TextFrame**

express   一个代表 **TextStyle** 对象的变量。

## 类型

TextFrame

## 说明


使用 **TextFrame** 对象的 **TextRange** 属性可返回文本框中的文本。

在应用 **TextFrame** 属性之前，可使用 **HasTextFrame** 属性来确定形状中是否包含文本框。



## 示例


```JavaScript
/*本示例向活动演示文稿的幻灯片母版的正文样式的文本框中添加文本，然后设置文本框的上边距。*/
function test() {
    let textStyles = ActivePresentation.SlideMaster.TextStyles
    let textFrame = textStyles.Item(ppBodyStyle).TextFrame
    textFrame.TextRange.Text = "Here is some test text"
    textFrame.MarginTop = 10
}
```


```JavaScript
/*本示例显示活动演示文稿的备注母版的标题样式的文本框中文本的方向是否为msoTextOrientationHorizontal。*/
function test() {
    let textStyle = ActivePresentation.NotesMaster.TextStyles.Item(ppTitleStyle)
    alert(textStyle.TextFrame.Orientation == msoTextOrientationHorizontal)
}
```
