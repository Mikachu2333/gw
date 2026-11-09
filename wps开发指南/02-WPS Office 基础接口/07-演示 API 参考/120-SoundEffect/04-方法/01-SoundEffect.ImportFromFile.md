# SoundEffect.ImportFromFile

设置当单击指定形状或对其播放动画以及发生指定的幻灯片切换时发出的声音。



## 语法

express.**ImportFromFile(FileName)**

express   一个代表 **SoundEffect** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 所指定声音文件的名称。 |

## 返回值

void

## 示例


```JavaScript
/*本示例指定转换到当前演示文稿第二张幻灯片时开始播放文件 coin.wav，并持续播放直到开始下一个声音文件。*/
function test() {
    let slideShowTransition = ActivePresentation.Slides.Item(2).SlideShowTransition
    slideShowTransition.SoundEffect.ImportFromFile("D:\\TestFile\\coin.wav")
    slideShowTransition.LoopSoundUntilNext = msoTrue
}
```


```JavaScript
/*本示例设置活动窗口选定的第一张幻灯片的第一个形状动画效果伴随有文件 type.wav 声音。*/
function test() {
    let animationSettings = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1).AnimationSettings
    animationSettings.SoundEffect.ImportFromFile("D:\\TestFile\\type.wav")
}
```
