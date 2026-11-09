# SoundEffect 对象

代表在幻灯片放映过程中伴随动画或幻灯片切换的声音效果。

## 说明


使用 **AnimationSettings** 对象的 [ **SoundEffect** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/SoundEffect) 属性返回 **SoundEffect** 对象，该对象代表伴随动画的声音效果。


## 示例


```JavaScript
/*本示例指定活动演示文稿第一张幻灯片的标题动画伴随有文件 coin.wav 声音。*/
function test() {
    let animationSettings = ActivePresentation.Slides.Item(1).Shapes.Item(1).AnimationSettings
    animationSettings.TextLevelEffect = ppAnimateByAllLevels
    animationSettings.SoundEffect.ImportFromFile("D:\\TestFile\\coin.wav")
}
```
使用 **SlideShowTransition** 对象的 **SoundEffect** 属性返回 **SoundEffect** 对象，该对象代表伴随幻灯片切换的声音效果。



```JavaScript
/*本示例指定切换到活动演示文稿中第一张幻灯片时伴随有文件"type.wav"的声音。*/
function test() {
    ActivePresentation.Slides.Item(1).SlideShowTransition.SoundEffect.ImportFromFile("D:\\TestFile\\type.wav")
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ImportFromFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SoundEffect/member/ImportFromFile) | 设置当单击指定形状或对其播放动画以及发生指定的幻灯片切换时发出的声音。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SoundEffect/member/Name) | 返回或设置指定对象的名称。可读/写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SoundEffect/member/Type) | 代表声音效果的类型。可读/写。 |