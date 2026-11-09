# SlideShowTransition.SoundEffect

返回一个 **SoundEffect** 对象，该对象代表切换到指定幻灯片时播放的声音。只读。



## 语法

express.**SoundEffect**

express   一个代表 **SlideShowTransition** 对象的变量。

## 类型

SoundEffect

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
/*本示例显示第一篇演示文稿第一张幻灯片在切换期间播放的音频名称。*/
function test() {
    let slideShowTransition = Presentations.Item(1).Slides.Item(1).SlideShowTransition
    alert(slideShowTransition.SoundEffect.Name)
}
```
