# EffectInformation.AfterEffect

返回一个 **MsoAnimAfterEffect** 常量，该常量指示某个动画播放后效果在运行结束后是变暗、隐藏还是不更改。只读。



## 语法

express.**AfterEffect**

express   一个代表 **EffectInformation** 对象的变量。

## 类型

MsoAnimAfterEffect

## 说明


 **AfterEffect** 属性返回的值可以是下列 **MsoAnimAfterEffect** 常量之一：

| 常量 |
| -------------------------------- |
| **msoAnimAfterEffectDim**             |
| **msoAnimAfterEffectHide**        |
| **msoAnimAfterEffectHideOnNextClick** |
| **msoAnimAfterEffectMixed**           |
| **msoAnimAfterEffectNone**            |



## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的第一个动画效果在动画播放后效果是否隐藏。*/
function test() {
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.EffectInformation.AfterEffect == msoAnimAfterEffectHide)
}
```


```JavaScript
/*本示例显示活动窗口中选定的第一张幻灯片的第二个动画在播放后的效果。*/
function test() {
    let effectInformation = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(2).EffectInformation
    switch (effectInformation.AfterEffect) {
        case msoAnimAfterEffectDim:
            alert("动画播放效果在运行后变暗。")
            break
        case msoAnimAfterEffectHide:
            alert("动画播放效果在运行后隐藏。")
            break
        case msoAnimAfterEffectHideOnNextClick:
            alert("动画播放效果在下次单击鼠标时隐藏。")
            break
        case msoAnimAfterEffectMixed:
            alert("动画播放效果在运行后混合多种效果结束。")
            break
        case msoAnimAfterEffectNone:
            alert("动画播放效果在运行后不变。")
            break
    }
}
```
