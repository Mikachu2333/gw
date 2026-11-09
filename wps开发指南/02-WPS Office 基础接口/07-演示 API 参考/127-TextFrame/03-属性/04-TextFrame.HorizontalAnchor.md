# TextFrame.HorizontalAnchor

返回或设置文本框架内文本的水平对齐方式。可读/写。



## 语法

express.**HorizontalAnchor**

express   一个代表 **TextFrame** 对象的变量。

## 类型

MsoHorizontalAnchor

## 说明


| **HorizontalAnchor** 属性返回的值可以是下列 **MsoHorizontalAnchor** 常量之一： |
| ---------------------------- |
| **msoAnchorNone**            |
| **msoHorizontalAnchorMixed** |
| **msoAnchorCenter**          |



## 示例


```JavaScript
/*本示例将活动演示文稿幻灯片母版上第一个形状中的文本对齐方式设为顶部居中。*/
function test() {
    let slide = ActivePresentation.SlideMaster
    let shape = slide.Shapes.Item(1)
    shape.TextFrame.HorizontalAnchor = msoAnchorCenter
    shape.TextFrame.VerticalAnchor = msoAnchorTop
}
```


```JavaScript
/*本示例判断活动演示文稿中第一张幻灯片标题文本是否水平居中，并通知用户。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let textFrame = slide.Shapes.Title.TextFrame
    if (textFrame.HorizontalAnchor == msoAnchorCenter) {
        alert("该标题文本水平居中。")
    } else {
        alert("该标题文本未水平居中。")
    }
}
```
