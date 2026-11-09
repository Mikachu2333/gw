# Effect.Index

返回 **Long** 类型值，该值代表动画效果或设计的索引号。只读。



## 语法

express.**Index**

express   一个代表 **Effect** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例显示第一张幻灯片的主动画序列中所有效果的名称和索引号。*/
function test() {
    let sequence = ActivePresentation.Slides.Item(1).TimeLine.MainSequence
    for (let i = 1; i <= sequence.Count; i++) {
        let effect = sequence.Item(i)
        alert(`Effect Name: ${effect.DisplayName}\nEffect Index: ${effect.Index}`)
    }
}
```


```JavaScript
/*本示例向第一篇演示文稿第一张幻灯片的第一个形状添加一种动画效果，并显示该动画效果的索引号。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    let effect = slide.TimeLine.MainSequence.AddEffect(slide.Shapes.Item(1), msoAnimEffectLighten)
    alert(effect.Index)
}
```
