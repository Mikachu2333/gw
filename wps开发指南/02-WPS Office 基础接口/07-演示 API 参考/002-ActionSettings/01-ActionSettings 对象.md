# ActionSettings 对象

包含两个 **[ActionSetting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/obj)** 对象的集合，这些对象用于形状或文本范围。其中一个 **ActionSetting** 对象代表在幻灯片放映中用户单击指定对象时该对象的反应；另一个 **ActionSetting** 对象代表在幻灯片放映中用户将鼠标指针移动到指定对象上时该对象的反应。

## 说明


使用 **[ActionSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/ActionSettings)** 属性返回 **ActionSettings** 集合。使用 **ActionSettings** (*index*)（其中 *index* 为 **ppMouseClick** 或 **ppMouseOver** ）可返回单个 **ActionSetting** 对象。


## 示例


```JavaScript
/*本示例指定在幻灯片放映过程中的任何时候，如果鼠标指针经过活动演示文稿第一张幻灯片的第三个形状，将运行宏 CalculateTotal。*/
function test() {
    let actionSetting = ActivePresentation.Slides.Item(1).Shapes.Item(3).ActionSettings.Item(ppMouseOver)
    actionSetting.Action = ppActionRunMacro
    actionSetting.Run = "CalculateTotal"
    actionSetting.AnimateAction = msoTrue
}
```


```JavaScript
/*本示例显示当鼠标指针单击活动窗口选定的第一个形状时播放的声音效果的类型是否为ppSoundFile。*/
function test() {
    let actionSetting = ActiveWindow.Selection.ShapeRange.Item(1).ActionSettings.Item(ppMouseClick)
    alert(actionSetting.SoundEffect.Type == ppSoundFile)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSettings/member/Item) | 从指定的 **ActionSettings** 集合中返回单个动作设置。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSettings/member/Application) | 返回一个 Application 对象，该对象表示指定对象的创建者。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSettings/member/Count) | 返回指定集合中的对象数目。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSettings/member/Parent) | 返回指定对象的父对象。 |