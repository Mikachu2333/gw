# ActionSetting.Hyperlink

返回一个 **[Hyperlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlink/obj)** 对象，该对象代表指定形状的超链接。只读。



## 语法

express.**Hyperlink**

express   一个代表 **ActionSetting** 对象的变量。

## 类型

Hyperlink

## 说明


要在幻灯片放映过程中激活超链接，必须将 **[Action](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/member/Action)** 属性设为 ppActionHyperlink。



## 示例


```JavaScript
/*本示例对当前演示文稿中第一张幻灯片上的第一个形状进行设置，使其在幻灯片演示过程中，如果被单击则跳转到 WPS 网站上。*/
function test() {
    let actionSetting = ActivePresentation.Slides.Item(1).Shapes.Item(1).ActionSettings.Item(ppMouseClick)
    actionSetting.Action = ppActionHyperlink
    actionSetting.Hyperlink.Address = "https://www.wps.cn/"
}
```


```JavaScript
/*本示例显示当鼠标指针经过活动窗口选定的第一个形状时，该形状的超链接屏幕提示文字。*/
function test() {
    let actionSetting = ActiveWindow.Selection.ShapeRange.Item(1).ActionSettings.Item(ppMouseOver)
    alert(actionSetting.Hyperlink.ScreenTip)
}
```
