# Shape.ActionSettings

返回一个 **[ActionSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSettings/obj)** 对象，该对象包含在幻灯片放映期间，当用户在指定形状或文本区域内单击或移动鼠标时所发生的操作的相关信息。只读。



## 语法

express.**ActionSettings**

express   一个代表 **Shape** 对象的变量。

## 类型

ActionSettings

## 示例


```JavaScript
/*本示例设置在当前演示文稿中第二张幻灯片的第一个形状中单击或移动鼠标时产生的动作。*/
function test() {
    let shape = ActivePresentation.Slides(2).Shapes(1)
    shape.ActionSettings(ppMouseClick).Action = ppActionLastSlide
    shape.ActionSettings(ppMouseOver).SoundEffect.Name = "applause"
}
```


```JavaScript
/*本示例对当前演示文稿中第一张幻灯片上的第一个形状进行设置，使其在幻灯片放映过程中，如果被单击则跳转到 WPS 网站上。*/
function test() {
    let actionSetting = ActivePresentation.Slides.Item(1).Shapes.Item(1).ActionSettings.Item(ppMouseClick)
    actionSetting.Action = ppActionHyperlink
    actionSetting.Hyperlink.Address = "https://www.wps.cn/"
}
```
