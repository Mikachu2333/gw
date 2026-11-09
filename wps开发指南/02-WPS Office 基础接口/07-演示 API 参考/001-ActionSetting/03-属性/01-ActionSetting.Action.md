# ActionSetting.Action

返回或设置在幻灯片放映过程中单击指定形状或将鼠标指针定位到形状上时将发生的动作的类型。可读/写。



## 语法

express.**Action**

express   一个代表 **ActionSetting** 对象的变量。

## 类型

PpActionType

## 说明


 **Action** 属性值可以是 **[PpActionType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/enum/PpActionType)** 常量之一。

可将 **Action** 属性与 **ActionSetting** 对象的其他属性结合使用，如下表所示。

| **如果将 Action 属性设置为此值**      | **使用此属性**         | **进行此操作**                                 |
| ---------------------- | ------------- | ------------------------------------- |
| **ppActionHyperlink**      | **[Hyperlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/member/Hyperlink)**     | 设置超链接的属性，在幻灯片放映过程中为响应形状上的鼠标动作将转至该超链接。 |
| **ppActionRunProgram**     | **[Run](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/member/Run)**           | 返回或设置在幻灯片放映过程中为响应形状上的鼠标动作而运行的程序的名称。   |
| **ppActionRunMacro**       | **[Run](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/member/Run)**           | 返回或设置在幻灯片放映过程中为响应形状上的鼠标动作而运行的宏的名称。    |
| **ppActionOLEVerb**        | **[ActionVerb](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/member/ActionVerb)**    | 设置在幻灯片放映过程中为响应形状上的鼠标动作而调用的 OLE 动作。    |
| **ppActionNamedSlideShow** | **[SlideShowName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/member/SlideShowName)** | 设置自定义放映名称以响应幻灯片放映过程中对形状的鼠标操作。         |



## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片的第三个形状（OLE 对象），使其在幻灯片放映过程中当鼠标移过它时播放。*/
function test() {
    let actionSetting = ActivePresentation.Slides.Item(1).Shapes.Item(3).ActionSettings.Item(ppMouseOver)
    actionSetting.ActionVerb = "Play"
    actionSetting.Action = ppActionOLEVerb
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状在用户单击形状时的动作的类型是否为ppActionNamedSlideShow。*/
function test() {
    let actionSetting = ActiveWindow.Selection.ShapeRange.Item(1).ActionSettings.Item(ppMouseClick)
    alert(actionSetting.Action == ppActionNamedSlideShow)
}
```
