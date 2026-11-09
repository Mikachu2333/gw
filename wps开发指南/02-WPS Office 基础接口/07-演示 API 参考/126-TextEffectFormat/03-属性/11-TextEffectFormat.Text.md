# TextEffectFormat.Text

返回或设置一个 **String** 类型值，该值代表指定对象中包含的文本。可读/写。



## 语法

express.**Text**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的（艺术字）标题中的文本设置为“test”。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Title.TextEffect.Text = "test"
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个艺术字中包含的文本。*/
function test() {
    let textEffectFormat = ActiveWindow.Selection.ShapeRange.Item(1).TextEffect
    alert(textEffectFormat.Text)
}
```
