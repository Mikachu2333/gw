# TextRange.ActionSettings

返回一个 **[ActionSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSettings/obj)** 对象，该对象包含在幻灯片放映期间，当用户在指定形状或文本区域内单击或移动鼠标时所发生的操作的相关信息。只读。



## 语法

express.**ActionSettings**

express   一个代表 **TextRange** 对象的变量。

## 类型

ActionSettings

## 示例


```JavaScript
/*本示例设置在当前演示文稿中第二张幻灯片的第一个形状的文本在放映过程中被单击或移动鼠标时产生的动作。*/
function test() {
    let shape = ActivePresentation.Slides.Item(2).Shapes.Item(1)
    let textRange = shape.TextFrame.TextRange
    textRange.ActionSettings(ppMouseClick).Action = ppActionLastSlide
    textRange.ActionSettings(ppMouseOver).SoundEffect.Name = "applause"
}
```


```JavaScript
/*本示例对当前演示文稿中第一张幻灯片上的第一个形状的文本进行设置，使其在幻灯片放映过程中，如果被单击则跳转到 WPS 网站上。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let textRange = shape.TextFrame.TextRange
    textRange.ActionSettings(ppMouseClick).Action = ppActionHyperlink
    textRange.ActionSettings(ppMouseClick).Hyperlink.Address = "https://www.wps.cn/"
}
```
