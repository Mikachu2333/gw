# Shape.BlackWhiteMode

返回或设置一个值，该值指示以黑白模式查看演示文稿时指定形状的出现形式。可读/写。



## 语法

express.**BlackWhiteMode**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoBlackWhiteMode

## 说明


 **BlackWhiteMode** 属性的值可以是下列 **MsoBlackWhiteMode** 常量之一。

| 常量 |
| --------------------------------- |
| **msoBlackWhiteAutomatic**        |
| **msoBlackWhiteBlack**            |
| **msoBlackWhiteBlackTextAndLine** |
| **msoBlackWhiteDontShow**         |
| **msoBlackWhiteGrayOutline**      |
| **msoBlackWhiteGrayScale**        |
| **msoBlackWhiteHighContrast**     |
| **msoBlackWhiteInverseGrayScale** |
| **msoBlackWhiteLightGrayScale**   |
| **msoBlackWhiteMixed**            |
| **msoBlackWhiteWhite**            |



## 示例


```JavaScript
/*本示例设置以黑白模式查看活动演示文稿时该演示文稿的第一张幻灯片的第一个形状的出现形式为黑色。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Item(1).BlackWhiteMode = msoBlackWhiteBlack
}
```


```JavaScript
/*本示例显示以黑白模式查看第一篇演示文稿时该演示文稿的第一张幻灯片的第二个形状的出现形式是否为msoBlackWhiteAutomatic。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(2)
    alert(shape.BlackWhiteMode == msoBlackWhiteAutomatic)
}
```
