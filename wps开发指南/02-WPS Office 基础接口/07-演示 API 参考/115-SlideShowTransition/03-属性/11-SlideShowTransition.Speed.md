# SlideShowTransition.Speed

返回或设置一个 **PpTransitionSpeed** 常量，该常量代表切换到指定幻灯片的速度。可读/写。



## 语法

express.**Speed**

express   一个代表 **SlideShowTransition** 对象的变量。

## 类型

PpTransitionSpeed

## 说明


| **Speed** 属性的值可以是下列 **PpTransitionSpeed** 常量之一： |
| ----------------------------------------------- |
| ppTransitionSpeedFast                           |
| ppTransitionSpeedMedium                         |
| ppTransitionSpeedMixed                          |
| ppTransitionSpeedSlow                           |



## 示例


```JavaScript
/*本示例设置切换到当前演示文稿第一张幻灯片的特殊效果，并指定切换为快速。*/
function test() {
    let slideShowTransition = ActivePresentation.Slides.Item(1).SlideShowTransition
    slideShowTransition.EntryEffect = ppEffectStripsDownLeft
    slideShowTransition.Speed = ppTransitionSpeedFast
}
```


```JavaScript
/*本示例判断第一篇演示文稿第一张幻灯片在幻灯片切换期间速度是否为慢速。*/
function test() {
    let slideShowTransition = Presentations.Item(1).Slides.Item(1).SlideShowTransition
    if (slideShowTransition.Speed == ppTransitionSpeedSlow) {
        alert("当前幻灯片的切换期间的速度为慢速。")
    } else {
        alert("当前幻灯片的切换期间的速度不是慢速。")
    }
}
```
