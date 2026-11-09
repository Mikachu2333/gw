# TextFrame.HasText

返回一个值，该值指示指定形状是否有与其关联的文本。只读。



## 语法

express.**HasText**

express   一个代表 **TextFrame** 对象的变量。

## 类型

MsoTriState

## 说明


 **HasText** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明             |
| ------------ | -------------- |
| **msoFalse** | 指定形状没有与其关联的文本。 |
| **msoTrue**  | 指定形状有与其关联的文本。  |



## 示例


```JavaScript
/*本示例调整第一篇演示文稿的第一张幻灯片中的第二个形状的大小使之适合文本。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    let textFrame = slide.Shapes.Item(2).TextFrame
    if (textFrame.HasText == msoTrue) {
        textFrame.AutoSize = ppAutoSizeShapeToFitText
    }
}
```


```JavaScript
/*本示例判断活动演示文稿中第一张幻灯片标题是否有与其关联的文本，并通知用户。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let textFrame = slide.Shapes.Title.TextFrame
    if (textFrame.HasText == msoTrue) {
        alert("该标题有与其关联的文本。")
    } else {
        alert("该标题没有与其关联的文本。")
    }
}
```
