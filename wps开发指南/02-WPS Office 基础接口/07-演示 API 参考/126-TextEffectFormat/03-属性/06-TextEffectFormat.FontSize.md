# TextEffectFormat.FontSize

返回或设置指定艺术字的字号（以磅为单位）。可读/写。



## 语法

express.**FontSize**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例设置活动窗口选定的第一个形状（艺术字）的字号。*/
function test() {
    let textEffectFormat = ActiveWindow.Selection.ShapeRange.Item(1).TextEffect
    textEffectFormat.FontSize = 40
}
```


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片中标题（艺术字）的字号。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Title
    alert(shape.TextEffect.FontSize + " 磅")
}
```
