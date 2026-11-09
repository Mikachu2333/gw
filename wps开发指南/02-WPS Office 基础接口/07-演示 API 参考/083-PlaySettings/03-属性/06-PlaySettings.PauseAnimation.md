# PlaySettings.PauseAnimation

决定在指定的媒体剪辑播放结束前是否暂停幻灯片放映。可读/写。



## 语法

express.**PauseAnimation**

express   一个代表 **PlaySettings** 对象的变量。

## 类型

MsoTriState

## 说明


要使 **PauseAnimation** 属性设置生效，指定形状的 **[PlayOnEntry](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlaySettings/member/PlayOnEntry)** 属性必须设置为 **msoTrue** 。

 **PauseAnimation** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ------ | ------- |
| **msoFalse** | 在后台播放媒体剪辑时继续幻灯片放映。        |
| **msoTrue** | 在指定的媒体剪辑播放结束前暂停幻灯片放映。       |



## 示例


```JavaScript
/*本示例指定当前演示文稿第一张幻灯片的第一个形状被激活后自动播放，并且当背景中播放该影片时暂停播放幻灯片放映。第一个形状必须是声音或影片对象。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let playSettings = shape.AnimationSettings.PlaySettings
    playSettings.PlayOnEntry = msoTrue
    playSettings.PauseAnimation = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个（影片）形状播放结束前是否暂停幻灯片放映。*/
function test() {
    let playSettings = ActiveWindow.Selection.ShapeRange.Item(1).AnimationSettings.PlaySettings
    alert(playSettings.PauseAnimation == msoTrue)
}
```
