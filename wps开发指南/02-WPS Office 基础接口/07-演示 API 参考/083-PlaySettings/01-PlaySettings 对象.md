# PlaySettings 对象

包含关于指定的媒体剪辑在幻灯片放映中的播放方式的信息。

## 说明


使用 **[PlaySettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/PlaySettings)** 属性返回的 **PlaySettings** 对象。


## 示例


```JavaScript
/*本示例在当前演示文稿的第一张幻灯片中插入名为“test.avi”的影片，将该影片设置为在上一个动画或幻灯片切换后自动播放，指定在播放该影片时幻灯片放映继续，并指定幻灯片放映期间该影片在不播放时隐藏。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.AddMediaObject("D:\\test.avi", 20, 20)
    let playSettings = shape.AnimationSettings.PlaySettings
    playSettings.PlayOnEntry = msoTrue
    playSettings.PauseAnimation = msoFalse
    playSettings.HideWhileNotPlaying = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个（影片）形状播放完毕后是否自动重新展示该影片的第一帧。*/
function test() {
    let playSettings = ActiveWindow.Selection.ShapeRange.Item(1).AnimationSettings.PlaySettings
    alert(playSettings.RewindMovie == msoTrue)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ActionVerb](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlaySettings/member/ActionVerb) | 返回或设置包含 OLE 动作的字符串，该动作将在幻灯片放映过程中当指定的 OLE 对象进行动画显示时运行。可读/写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlaySettings/member/Application) | 返回一个 **Application** 对象，该对象表示指定对象的创建者。 |
| [HideWhileNotPlaying](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlaySettings/member/HideWhileNotPlaying) | 决定在幻灯片放映期间指定的媒体剪辑在不播放时是否隐藏。可读/写。 |
| [LoopUntilStopped](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlaySettings/member/LoopUntilStopped) | 决定指定影片或声音是否持续循环播放，直到出现下列情况：开始下一个影片或声音、用户单击幻灯片或发生幻灯片切换。可读/写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlaySettings/member/Parent) | 返回指定对象的父对象。 |
| [PauseAnimation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlaySettings/member/PauseAnimation) | 决定在指定的媒体剪辑播放结束前是否暂停幻灯片放映。可读/写。 |
| [PlayOnEntry](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlaySettings/member/PlayOnEntry) | 决定指定的影片或声音后是否在激活后自动播放。可读/写。 |
| [RewindMovie](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlaySettings/member/RewindMovie) | 决定在指定的影片播放完毕后是否自动重新显示该影片的第一帧。可读/写。 |
| [StopAfterSlides](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlaySettings/member/StopAfterSlides) | 返回或设置在媒体剪辑播放完毕前要放映的幻灯片数。可读/写。 |