# Effect.Paragraph

返回或设置文本范围中要应用动画效果的段落。可读/写。



## 语法

express.**Paragraph**

express   一个代表 **Effect** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的第一个动画效果要应用的段落。*/
function test() {
    let effect = ActivePresentation.Slides.Item(1).TimeLine.MainSequence.Item(1)
    alert(effect.Paragraph)
}
```


```JavaScript
/*本示例设置活动窗口中选定的第一张幻灯片的第一个动画效果要应用的段落。*/
function test() {
    let effect = ActiveWindow.Selection.SlideRange.Item(1).TimeLine.MainSequence.Item(1)
    effect.Paragraph = 2
}
```
