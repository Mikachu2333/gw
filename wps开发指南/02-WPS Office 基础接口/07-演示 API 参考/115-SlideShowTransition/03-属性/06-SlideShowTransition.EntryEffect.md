# SlideShowTransition.EntryEffect

对于 **SlideShowTransition** 对象，此属性返回或设置应用于指定幻灯片切换的特殊效果。 **PpEntryEffect** 类型，可读写。



## 语法

express.**EntryEffect**

express   一个代表 **SlideShowTransition** 对象的变量。

## 类型

PpEntryEffect

## 说明


如果将指定形状的 **[TextLevelEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/TextLevelEffect)** 属性设为 **ppAnimateLevelNone** （默认值）或将 **[Animate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AnimationSettings/member/Animate)** 属性设为 **msoFalse** ，您将看不到通过 **EntryEffect** 属性应用的特殊效果。



## 示例


```JavaScript
/*本示例设置第一篇演示文稿第一张幻灯片切换幻灯片的动画为从右侧飞入。*/
function test() {
    Presentations.Item(1).Slides.Item(1).SlideShowTransition.EntryEffect = ppEffectFlyFromRight
}
```


```JavaScript
/*本示例判断活动演示文稿第一张幻灯片在幻灯片切换时的动画是否为从左侧飞入。*/
function test() {
    let slideShowTransition = ActivePresentation.Slides.Item(1).SlideShowTransition
    if (slideShowTransition.EntryEffect == ppEffectFlyFromLeft) {
        alert("当前幻灯片在幻灯片切换时的动画为从左侧飞入")
    } else {
        alert("当前幻灯片在幻灯片切换时的动画不是从左侧飞入")
    }
}
```
