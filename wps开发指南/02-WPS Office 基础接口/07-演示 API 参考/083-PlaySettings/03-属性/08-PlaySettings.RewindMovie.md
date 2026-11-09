# PlaySettings.RewindMovie

决定在指定的影片播放完毕后是否自动重新显示该影片的第一帧。可读/写。



## 语法

express.**RewindMovie**

express   一个代表 **PlaySettings** 对象的变量。

## 类型

MsoTriState

## 说明


 **RewindMovie** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ----- | ------ |
| **msoFalse**  | 在指定的影片放映完毕后不自动重新显示该影片的第一帧。 |
| **msoTrue** | 在指定的影片放映完毕后自动重新显示该影片的第一帧。 |



## 示例


```JavaScript
/*本示例指定影片的第一帧（由当前演示文稿第一张幻灯片的第一个形状代表）在影片播放完毕后重新显示。第一个形状必须是影片对象。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.AnimationSettings.PlaySettings.RewindMovie = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个（影片）形状播放完毕后是否自动重新展示该影片的第一帧。*/
function test() {
    let playSettings = ActiveWindow.Selection.ShapeRange.Item(1).AnimationSettings.PlaySettings
    alert(playSettings.RewindMovie == msoTrue)
}
```
