# ActionSetting.ShowAndReturn

决定 WPP 是否返回初始的幻灯片放映以及返回的条件。可读/写。



## 语法

express.**ShowAndReturn**

express   一个代表 **ActionSetting** 对象的变量。

## 类型

MsoTriState

## 说明


 **ShowAndReturn** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ------ | ------- |
| **msoFalse** | 默认值。WPP 不会从未激活的自定义幻灯片放映返回初始幻灯片放映。 |
| **msoTrue** | WPP 从取消激活的自定义幻灯片放映返回初始幻灯片放映，该自定义幻灯片放映通过初始演示文稿的 **[ActionSetting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/obj)** 对象激活。 |



## 示例


```JavaScript
/*本示例设置当前演示文稿中第一张幻灯片上第二个形状的鼠标单击动作为：显示名为“techtalk”的自定义幻灯片放映。当该自定义幻灯片放映结束后，将自动返回演示文稿在鼠标单击前的最初状态。*/
function test() {
    let actionSetting = Application.ActivePresentation.Slides.Item(1).Shapes.Item(2).ActionSettings.Item(ppMouseClick)
    actionSetting.Action = ppActionNamedSlideShow
    actionSetting.SlideShowName = "techtalk"
    actionSetting.ShowandReturn = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状在用户单击形状时 WPP 是否返回初始的幻灯片放映。*/
function test() {
    let actionSetting = ActiveWindow.Selection.ShapeRange.Item(1).ActionSettings.Item(ppMouseClick)
    alert(actionSetting.ShowAndReturn == msoTrue)
}
```
