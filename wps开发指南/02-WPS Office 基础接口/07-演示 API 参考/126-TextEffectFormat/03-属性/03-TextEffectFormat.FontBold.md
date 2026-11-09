# TextEffectFormat.FontBold

确定指定艺术字中的字体是否为粗体。可读/写。



## 语法

express.**FontBold**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

MsoTriState

## 说明


 **FontBold** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明             |
| ------------ | -------------- |
| **msoFalse** | 指定艺术字中的字体不是粗体。 |
| **msoTrue**  | 指定艺术字中的字体为粗体。  |



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的第三个形状（艺术字）的字体设置为粗体。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Item(3).TextEffect.FontBold = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状（艺术字）中的字体是否为粗体。*/
function test() {
    let textEffectFormat = ActiveWindow.Selection.ShapeRange.Item(1).TextEffect
    alert(textEffectFormat.FontBold == msoTrue)
}
```
