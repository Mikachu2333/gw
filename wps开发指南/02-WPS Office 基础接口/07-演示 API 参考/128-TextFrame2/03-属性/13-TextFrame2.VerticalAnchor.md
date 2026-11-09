# TextFrame2.VerticalAnchor

返回或设置文本框架中文本的垂直对齐方式。可读/写。



## 语法

express.**VerticalAnchor**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

MsoVerticalAnchor

## 说明


 **VerticalAnchor** 属性的值可以是下列 **MsoVerticalAnchor** 常量之一：

| 常量 |
| --- |
| **msoAnchorBottom** |
| **msoAnchorMiddle** |
| **msoAnchorTop** |
| **msoVerticalAnchorMixed** |



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的第一个形状的文本对齐方式设置为顶部居中。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.TextFrame2.HorizontalAnchor = msoAnchorCenter
    shape.TextFrame2.VerticalAnchor = msoAnchorTop
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状的文本框架中文本的垂直对齐方式是否为msoAnchorBottom。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.TextFrame2.VerticalAnchor == msoAnchorBottom)
}
```
