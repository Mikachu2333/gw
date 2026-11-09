# AnimationSettings.SoundEffect

返回一个 **SoundEffect** 对象，该对象代表切换到指定幻灯片时播放的声音。只读。



## 语法

express.**SoundEffect**

express   一个代表 **AnimationSettings** 对象的变量。

## 类型

SoundEffect

## 示例


```JavaScript
/*本示例设置在当前演示文稿第一张幻灯片的第一个形状演示动画时播放文件“coin.wav”。*/
function test() {
    let animationSettings = ActivePresentation.Slides.Item(1).Shapes.Item(1).AnimationSettings
    animationSettings.Animate = msoTrue
    animationSettings.TextLevelEffect = ppAnimateByAllLevels
    animationSettings.SoundEffect.ImportFromFile("D:\\coin.wav")
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状切换到指定幻灯片时播放的声音类型是否为ppSoundFile。*/
function test() {
    let animationSettings = ActiveWindow.Selection.ShapeRange.Item(1).AnimationSettings
    alert(animationSettings.SoundEffect.Type == ppSoundFile)
}
```
