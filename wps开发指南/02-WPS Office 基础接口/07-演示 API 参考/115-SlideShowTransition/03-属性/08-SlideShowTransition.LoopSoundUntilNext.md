# SlideShowTransition.LoopSoundUntilNext

指定是否循环播放为指定的幻灯片切换所设置的声音，直到下一个声音开始。可读/写， **MsoTriState** 类型。



## 语法

express.**LoopSoundUntilNext**

express   一个代表 **SlideShowTransition** 对象的变量。

## 类型

MsoTriState

## 说明


 **LoopSoundUntilNext** 属性的值可以是其中一个 **MsoTriState** 常量：

| 常量 | 说明 |
| ---- | ---- |
| msoFalse | 不循环播放为指定幻灯片切换所设置的声音。 |
| msoTrue | 循环播放为指定幻灯片切换所设置的声音，直到下一个声音开始。 |



## 示例


```JavaScript
/*本示例指定转换到当前演示文稿第二张幻灯片时开始播放文件“Dudududu.wav”，并持续播放直到开始下一个声音文件。*/
function test() {
    let slideShowTransition = ActivePresentation.Slides.Item(2).SlideShowTransition
    slideShowTransition.SoundEffect.ImportFromFile("C:\\sndsys\\dudududu.wav")
    slideShowTransition.LoopSoundUntilNext = msoTrue
}
```


```JavaScript
/*本示例判断第一篇演示文稿第一张幻灯片在切换期间是否循环播放为指定幻灯片切换所设置的声音，并通知用户。*/
function test() {
    let slideShowTransition = Presentations.Item(1).Slides.Item(1).SlideShowTransition
    if (slideShowTransition.LoopSoundUntilNext == msoTrue) {
        alert("该幻灯片在切换过程中循环播放指定的声音。")
    } else {
        alert("该幻灯片在切换过程中不会循环播放指定的声音。")
    }
}
```
