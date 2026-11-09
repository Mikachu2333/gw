# SoundEffect.Type

代表声音效果的类型。可读/写。



## 语法

express.**Type**

express   一个代表 **SoundEffect** 对象的变量。

## 类型

PpSoundEffectType

## 说明


 **Type** 属性的值可以是下列 **PpSoundEffectType** 常量之一：

| 常量 |
| ----------------------- |
| **ppSoundEffectsMixed** |
| **ppSoundFile**         |
| **ppSoundNone**         |
| **ppSoundStopPrevious** |



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片在切换期间播放的声音效果的类型设置为ppSoundStopPrevious。*/
function test() {
    let slideShowTransition = ActivePresentation.Slides.Item(1).SlideShowTransition
    slideShowTransition.SoundEffect.Type = ppSoundStopPrevious
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个幻灯片在切换期间播放的声音效果的类型是否为ppSoundFile。*/
function test() {
    let slideShowTransition = ActiveWindow.Selection.SlideRange.Item(1).SlideShowTransition
    alert(slideShowTransition.SoundEffect.Type == ppSoundFile)
}
```
