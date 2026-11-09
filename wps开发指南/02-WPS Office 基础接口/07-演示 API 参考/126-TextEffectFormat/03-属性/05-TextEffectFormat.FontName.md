# TextEffectFormat.FontName

返回或设置指定的艺术字中的字体名称。可读/写。



## 语法

express.**FontName**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的第三个形状（艺术字）的字体名称设置为“Courier New”。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Item(3).TextEffect.FontName = "Courier New"
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状（艺术字）中的字体名称。*/
function test() {
    let textEffectFormat = ActiveWindow.Selection.ShapeRange.Item(1).TextEffect
    alert(textEffectFormat.FontName)
}
```
