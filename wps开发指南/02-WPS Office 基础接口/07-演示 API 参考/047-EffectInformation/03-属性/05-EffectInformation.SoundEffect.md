# EffectInformation.SoundEffect

返回一个 **SoundEffect** 对象，该对象代表切换到指定幻灯片期间要播放的声音。只读。



## 语法

express.**SoundEffect**

express   一个代表 **EffectInformation** 对象的变量。

## 类型

SoundEffect

## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片在演示第一个动画效果时播放文件“coin.wav”。*/
function test() {
    let effectInformation = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1).EffectInformation
    effectInformation.SoundEffect.ImportFromFile("D:\\coin.wav")
}
```


```JavaScript
/*本示例显示活动窗口中选定的第一张幻灯片的第二个动画播放声音的效果的类型是否为ppSoundFile。*/
function test() {
    let effectInformation = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(2).EffectInformation
    alert(effectInformation.SoundEffect.Type == ppSoundFile)
}
```
