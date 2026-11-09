# ShapeRange.BlackWhiteMode

返回或设置一个值，该值指示以黑白模式查看演示文稿时指定形状的出现形式。可读/写。



## 语法

express.**BlackWhiteMode**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoBlackWhiteMode

## 说明


| **BlackWhiteMode** 属性的值可以是下列 **MsoBlackWhiteMode** 常量之一。 |
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
/*本示例设置活动演示文稿第一张幻灯片中的第一个形状以黑白模式出现。以黑白模式查看演示文稿时，第一个形状将显示黑色，而不管其在彩色模式下是何种颜色。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Range(1).BlackWhiteMode = msoBlackWhiteBlack
}
```


```JavaScript
/*本示例显示活动窗口上选中形状以黑白模式查看时其显示形式是否为msoBlackWhiteGrayScale。*/
function test() {
    alert(ActiveWindow.Selection.ShapeRange.BlackWhiteMode == msoBlackWhiteGrayScale)
}
```
