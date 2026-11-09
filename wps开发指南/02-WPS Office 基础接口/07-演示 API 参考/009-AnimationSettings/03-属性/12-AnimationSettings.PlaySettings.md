# AnimationSettings.PlaySettings

返回一个 **[PlaySettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlaySettings/obj)** 对象，该对象包含指定的媒体剪辑在幻灯片放映中的播放方式的信息。只读。



## 语法

express.**PlaySettings**

express   一个代表 **AnimationSettings** 对象的变量。

## 类型

PlaySettings

## 示例


```JavaScript
/*本示例在当前演示文稿的第一张幻灯片中插入名为“test.avi”的影片，设置它在幻灯片切换后自动播放，并指定该影片对象在不播放时隐藏。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.AddOLEObject(10, 10, 255, 255, null, "D:\\test.avi")
    let playSettings = shape.AnimationSettings.PlaySettings
    playSettings.PlayOnEntry = msoTrue
    playSettings.HideWhileNotPlaying = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个（影片）形状是否持续循环播放，直到出现下列情况：开始下一个影片或声音、用户单击幻灯片或发生幻灯片切换。*/
function test() {
    let playSettings = ActiveWindow.Selection.ShapeRange.Item(1).AnimationSettings.PlaySettings
    alert(playSettings.LoopUntilStopped == msoTrue)
}
```
