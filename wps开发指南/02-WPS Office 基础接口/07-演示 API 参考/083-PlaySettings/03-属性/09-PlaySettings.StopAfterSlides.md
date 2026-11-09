# PlaySettings.StopAfterSlides

返回或设置在媒体剪辑播放完毕前要放映的幻灯片数。可读/写。



## 语法

express.**StopAfterSlides**

express   一个代表 **PlaySettings** 对象的变量。

## 类型

number（int 精度）

## 说明


要使 **StopAfterSlides** 属性设置生效，必须将指定幻灯片的 **[PauseAnimation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlaySettings/member/PauseAnimation)** 属性设为 **msoFalse** ，并且必须将 **[PlayOnEntry](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlaySettings/member/PlayOnEntry)** 属性设为 **msoTrue** 。

当指定数目的幻灯片放映结束或剪辑播放完毕时（无论哪种情况先发生），媒体剪辑将停止播放。0（零）值指定在放映完当前幻灯片后剪辑停止播放。



## 示例


```JavaScript
/*本例指定当媒体剪辑（由活动演示文稿中第一张幻灯片上的第一个形状代表）被激活时自动播放，并且当背景中播放该媒体剪辑的同时幻灯片将继续放映，还指定当放映完三张幻灯片或该剪辑播放完毕时（无论哪种情况先发生），媒体剪辑将停止播放。第一个形状必须是声音或影片对象。*/
function test() {
    let shape = Application.ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let playSettings = shape.AnimationSettings.PlaySettings
    playSettings.PlayOnEntry = msoTrue
    playSettings.PauseAnimation = msoFalse
    playSettings.StopAfterSlides = 3
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个（影片）形状播放完毕前要放映的幻灯片数。*/
function test() {
    let playSettings = ActiveWindow.Selection.ShapeRange.Item(1).AnimationSettings.PlaySettings
    alert(playSettings.StopAfterSlides)
}
```
