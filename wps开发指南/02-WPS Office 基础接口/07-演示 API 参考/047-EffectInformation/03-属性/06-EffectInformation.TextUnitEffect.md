# EffectInformation.TextUnitEffect

指示指定形状中的文本是按段落、按字还是按字母显示动画效果。只读。



## 语法

express.**TextUnitEffect**

express   一个代表 **EffectInformation** 对象的变量。

## 类型

MsoAnimTextUnitEffect

## 说明


 **TextUnitEffect** 属性的值可以是下列 **MsoAnimTextUnitEffect** 常量之一：

| 常量 |
| ------------------------------------ |
| **msoAnimTextUnitEffectByCharacter** |
| **msoAnimTextUnitEffectByParagraph** |
| **msoAnimTextUnitEffectByWord**      |
| **msoAnimTextUnitEffectMixed**       |



## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的第一个动画按照何种文本粒度显示动画效果。*/
function test() {
    let effectInformation = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1).EffectInformation
    switch (effectInformation.TextUnitEffect) {
        case msoAnimTextUnitEffectByCharacter:
            alert("幻灯片放映期间按字符显示动画效果。")
            break
        case msoAnimTextUnitEffectByParagraph:
            alert("幻灯片放映期间按段落显示动画效果。")
            break
        case msoAnimTextUnitEffectByWord:
            alert("幻灯片放映期间按字/词显示动画效果。")
            break
        case msoAnimTextUnitEffectMixed:
            alert("幻灯片放映期间混合效果显示动画效果。")
            break
    }
}
```


```JavaScript
/*本示例显示活动窗口中选定的第一张幻灯片的第二个动画显示动画效果的方式是否为msoAnimTextUnitEffectMixed。*/
function test() {
    let effectInformation = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(2).EffectInformation
    alert(effectInformation.TextUnitEffect == msoAnimTextUnitEffectMixed)
}
```
