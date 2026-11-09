# PlaySettings.LoopUntilStopped

决定指定影片或声音是否持续循环播放，直到出现下列情况：开始下一个影片或声音、用户单击幻灯片或发生幻灯片切换。可读/写。



## 语法

express.**LoopUntilStopped**

express   一个代表 **PlaySettings** 对象的变量。

## 类型

MsoTriState

## 说明


 **LoopUntilStopped** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ----- | ------ |
| **msoFalse**  | 指定影片或声音不持续循环播放。 |
| **msoTrue** | 指定影片或声音持续循环，直到开始下一个影片或声音、用户单击幻灯片或发生幻灯片切换。 |



## 示例


```JavaScript
/*本示例将当前演示文稿第一张幻灯片第一个形状设为以动画顺序开始播放，并持续播放直到开始下一个媒体剪辑。第一个形状必须是声音或影片对象。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(1).AnimationSettings.PlaySettings.LoopUntilStopped = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个（影片）形状是否持续循环播放，直到出现下列情况：开始下一个影片或声音、用户单击幻灯片或发生幻灯片切换。*/
function test() {
    let playSettings = ActiveWindow.Selection.ShapeRange.Item(1).AnimationSettings.PlaySettings
    alert(playSettings.LoopUntilStopped == msoTrue)
}
```
