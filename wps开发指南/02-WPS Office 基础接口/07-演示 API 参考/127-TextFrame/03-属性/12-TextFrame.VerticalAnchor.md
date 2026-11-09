# TextFrame.VerticalAnchor

返回或设置文本框架内文本的垂直对齐方式。可读/写。



## 语法

express.**VerticalAnchor**

express   一个代表 **TextFrame** 对象的变量。

## 类型

MsoVerticalAnchor

## 说明


 **VerticalAnchor** 属性的值可以是下列 **MsoVerticalAnchor** 常量之一：

| 常量                          | 说明                                                  |
| --------------------------- | --------------------------------------------------- |
| **msoAnchorBottom**         | 文本字符串的底端定位于当前位置。                                    |
| **msoAnchorBottomBaseLine** | 不管如何调整文本，文本字符串的底端都定位于当前位置。若调整文本时不定位基线，文本将在前面的位置上居中。 |
| **msoAnchorMiddle**         | 文本字符串的中端定位于当前位置。                                    |
| **msoAnchorTop**            | 文本字符串的顶端定位于当前位置。                                    |
| **msoAnchorTopBaseline**    | 不管如何调整文本，文本字符串的顶端都定位于当前位置。若调整文本时不定位基线，文本将在前面的位置上居中。 |
| **msoVerticalAnchorMixed**  | 只读。当一个形状范围内的两个或两个以上文本框对此属性具有不同的值时返回该常量。             |



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
/*本示例判断如果第一篇演示文稿的第一张幻灯片中标题文本的垂直对齐方式不是msoAnchorBottom，则将其切换为垂直居中。*/
function test() {
    let textFrame = Presentations.Item(1).Slides.Item(1).Shapes.Title.TextFrame
    if (textFrame.VerticalAnchor != msoAnchorBottom) {
        textFrame.VerticalAnchor = msoAnchorMiddle
    }
}
```
