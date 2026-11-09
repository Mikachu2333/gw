# PlaySettings.HideWhileNotPlaying

决定在幻灯片放映期间指定的媒体剪辑在不播放时是否隐藏。可读/写。



## 语法

express.**HideWhileNotPlaying**

express   一个代表 **PlaySettings** 对象的变量。

## 类型

MsoTriState

## 说明


 **HideWhileNotPlaying** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ----- | ------ |
| **msoFalse**  | 幻灯片放映过程中指定的媒体剪辑在不播放时不隐藏。 |
| **msoTrue** | 幻灯片放映过程中指定的媒体剪辑在不播放时隐藏。     |



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
/*本示例显示幻灯片放映期间活动窗口选定的第一个形状动画在不播放时是否隐藏。*/
function test() {
    let playSettings = ActiveWindow.Selection.ShapeRange.Item(1).AnimationSettings.PlaySettings
    alert(playSettings.HideWhileNotPlaying == msoTrue)
}
```
