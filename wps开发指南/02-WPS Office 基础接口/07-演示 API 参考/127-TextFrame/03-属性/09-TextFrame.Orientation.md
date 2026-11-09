# TextFrame.Orientation

返回或设置文本方向。可读/写。



## 语法

express.**Orientation**

express   一个代表 **TextFrame** 对象的变量。

## 类型

MsoTextOrientation

## 说明


由于所选择或安装的语言支持（例如美国英语）不同，有些常量可能不可用。

| **Orientation** 属性的值可以是 **MsoTextOrientation** 之一： |
| ---------------------------------------------- |
| **msoTextOrientationDownward**                 |
| **msoTextOrientationHorizontal**               |
| **msoTextOrientationHorizontalRotatedFarEast** |
| **msoTextOrientationMixed**                    |
| **msoTextOrientationUpward**                   |
| **msoTextOrientationVertical**                 |
| **msoTextOrientationVerticalFarEast**          |



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的第三个形状中的文本设为水平方向。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Item(3).TextFrame.Orientation = msoTextOrientationHorizontal
}
```


```JavaScript
/*本示例判断如果第一篇演示文稿的第一张幻灯片中标题文本方向不是msoTextOrientationUpward，则将其切换为垂直方向。*/
function test() {
    let textFrame = Presentations.Item(1).Slides.Item(1).Shapes.Title.TextFrame
    if (textFrame.Orientation != msoTextOrientationUpward) {
        textFrame.Orientation = msoTextOrientationVertical
    }
}
```
