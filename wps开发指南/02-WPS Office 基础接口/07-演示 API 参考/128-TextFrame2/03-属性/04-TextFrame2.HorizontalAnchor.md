# TextFrame2.HorizontalAnchor

返回或设置文本框架内文本的水平对齐方式。可读/写。



## 语法

express.**HorizontalAnchor**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

MsoHorizontalAnchor

## 说明


 **HorizontalAnchor** 属性的值可以是下列 **MsoHorizontalAnchor** 常量之一：

| 常量 |
| --- |
| **msoAnchorNone** |
| **msoHorizontalAnchorMixed** |
| **msoAnchorCenter** |



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
/*本示例判断活动窗口选定的第一张幻灯片标题文本是否水平居中，并通知用户。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let textFrame2 = slide.Shapes.Title.TextFrame2
    if (textFrame2.HorizontalAnchor == msoAnchorCenter) {
        alert("该标题文本水平居中。")
    } else {
        alert("该标题文本未水平居中。")
    }
}
```
