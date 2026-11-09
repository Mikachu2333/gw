# TextFrame2.HasText

指示包含指定文本框的形状是否有与其关联的文本。只读。



## 语法

express.**HasText**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

MsoTriState

## 说明


 **HasText** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明          |
| ------------ | ----------- |
| **msoFalse** | 指定文本框中没有文本。 |
| **msoTrue**  | 指定文本框中有文本。  |



## 示例


```JavaScript
/*本示例判断如果活动演示文稿的第一张幻灯片的第一个形状中包含文本，则调整该形状的大小使之适合文本。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let textFrame2 = slide.Shapes.Item(1).TextFrame2
    if (textFrame2.HasText == msoTrue) {
        textFrame2.AutoSize = msoAutoSizeShapeToFitText
    }
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状是否包含文本。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.TextFrame2.HasText == msoTrue)
}
```
