# PlaySettings.PlayOnEntry

决定指定的影片或声音后是否在激活后自动播放。可读/写。



## 语法

express.**PlayOnEntry**

express   一个代表 **PlaySettings** 对象的变量。

## 类型

MsoTriState

## 说明


将此属性设置为 **msoTrue** ，从而把 **AnimationSettings** 对象的 **[Animate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/Animate)** 属性设为 **msoTrue** 。将 **Animate** 属性设置为 **msoFalse** 可自动将 **PlayOnEntry** 属性设为 **msoFalse** 。

使用 **[ActionVerb](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSetting/member/ActionVerb)** 属性设置媒体剪辑被激活时调用的动作。

 **PlayOnEntry** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ----- | ------ |
| **msoFalse**  | 指定的影片或声音被激活后不自动播放。 |
| **msoTrue** | 指定的影片或声音被激活后自动播放。 |



## 示例


```JavaScript
/*本示例指定当前演示文稿第一张幻灯片的第一个形状在激活后自动播放。第一个形状必须是声音或影片对象。*/
function test() {
    let shape = Application.ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.AnimationSettings.PlaySettings.PlayOnEntry = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个（影片）形状是否在激活后自动播放。*/
function test() {
    let playSettings = ActiveWindow.Selection.ShapeRange.Item(1).AnimationSettings.PlaySettings
    alert(playSettings.PlayOnEntry == msoTrue)
}
```
