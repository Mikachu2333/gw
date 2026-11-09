# Effect.EffectInformation

返回一个 **[EffectInformation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/EffectInformation/obj)** 对象，该对象代表指定动画效果的信息。



## 语法

express.**EffectInformation**

express   一个代表 **Effect** 对象的变量。

## 类型

EffectInformation

## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的主动画序列时间线的第一个动画效果在动画播放后效果是否隐藏。*/
function test() {
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.EffectInformation.AfterEffect == msoAnimAfterEffectHide)
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的主动画序列时间线的第一个动画效果是否为msoAnimTextUnitEffectMixed。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.EffectInformation.TextUnitEffect == msoAnimTextUnitEffectMixed)
}
```
