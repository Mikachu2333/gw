# ActionSetting 对象

包含指定形状或文本范围在幻灯片放映中对鼠标动作的反应的有关信息。

## 说明


 **ActionSetting** 对象是 **[ActionSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSettings/obj)** 集合的成员。

 **ActionSettings** 集合包含一个代表在幻灯片放映中用户单击指定对象时该对象的反应的 **ActionSetting** 对象，以及一个代表在幻灯片放映中用户将鼠标指针移动到指定对象上时该对象的反应的 **ActionSetting** 对象。  

如果设置了 **ActionSetting** 对象的属性但没有效果，请确认已将 **[Action](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/member/Action)** 属性设为适当的值。

使用 **ActionSettings** (*index*)（其中 *index* 为 **ppMouseClick** 或 **ppMouseOver** ）可返回单个 **ActionSetting** 对象。


## 示例


```JavaScript
/*本示例对当前演示文稿中第一张幻灯片上的第三个形状进行设置，使其在幻灯片演示过程中，如果被单击则跳转到 WPS 网站上。*/
function test() {
    let actionSetting = ActivePresentation.Slides.Item(1).Shapes.Item(3).ActionSettings.Item(ppMouseClick)
    actionSetting.Action = ppActionHyperlink
    actionSetting.Hyperlink.Address = "https://www.wps.cn/"
}
```


```JavaScript
/*本示例显示当鼠标指针经过活动窗口选定的第一个形状时，将要运行的自定义幻灯片放映的名称。*/
function test() {
    let actionSetting = ActiveWindow.Selection.ShapeRange.Item(1).ActionSettings.Item(ppMouseOver)
    alert(actionSetting.SlideShowName)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Action](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/member/Action) | 返回或设置在幻灯片放映过程中单击指定形状或将鼠标指针定位到形状上时将发生的动作的类型。可读/写。 |
| [ActionVerb](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/member/ActionVerb) | 返回或设置包含 OLE 动作的字符串，该 OLE 动作将在用户在幻灯片放映过程中单击指定形状或将鼠标指针移过该形状时运行。可读/写。 |
| [AnimateAction](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/member/AnimateAction) | 发生指定的鼠标操作时，指定形状的颜色是否立即反转。可读/写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/member/Application) | 返回一个 Application 对象，该对象表示指定对象的创建者。 |
| [Hyperlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/member/Hyperlink) | 返回一个 **[Hyperlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Hyperlink/obj)** 对象，该对象代表指定形状的超链接。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/member/Parent) | 返回指定对象的父对象。 |
| [Run](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/member/Run) | 返回或设置演示文稿或宏的名称，当在幻灯片放映过程中单击指定形状或鼠标指针经过该形状时，将运行该演示文稿或宏。可读/写。 |
| [ShowAndReturn](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/member/ShowAndReturn) | 决定 WPP 是否返回初始的幻灯片放映以及返回的条件。可读/写。 |
| [SlideShowName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/member/SlideShowName) | 返回或设置自定义幻灯片放映的名称，该幻灯片放映将运行以响应幻灯片放映期间在形状上的鼠标动作。可读/写。 |
| [SoundEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/member/SoundEffect) | 返回一个 **SoundEffect** 对象，该对象代表切换到指定幻灯片时播放的声音。只读。 |