# TextEffectFormat.FontItalic

确定指定艺术字中的字体是否为斜体。可读/写。



## 语法

express.**FontItalic**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

MsoTriState

## 说明


 **FontItalic** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明             |
| ------------ | -------------- |
| **msoFalse** | 指定艺术字中的字体不是斜体。 |
| **msoTrue**  | 指定艺术字中的字体是斜体。  |



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片上名为“test”的形状（艺术字）的字体设置为斜体。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Item("test").TextEffect.FontItalic = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状（艺术字）中的字体是否为斜体。*/
function test() {
    let textEffectFormat = ActiveWindow.Selection.ShapeRange.Item(1).TextEffect
    alert(textEffectFormat.FontItalic == msoTrue)
}
```
