# TextFrame2.AutoSize

返回或设置一个值，该值指示是否自动更改指定形状的大小以使其中的文本适应边界。可读/写。



## 语法

express.**AutoSize**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

MsoAutoSize

## 说明


 **AutoSize** 属性的值可以是 **MsoAutoSize** 常量之一：

| 常量 |
| ----------------------------- |
| **msoAutoSizeMixed**          |
| **msoAutoSizeNone**           |
| **msoAutoSizeShapeToFitText** |
| **msoAutoSizeTextToFitShape** |



## 示例


```JavaScript
/*本示例调整活动演示文稿第一张幻灯片的标题边界框的大小以适应标题文本。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.Item(1)
    if (shape.TextFrame2.TextRange.Characters().Count < 50) {
        shape.TextFrame2.AutoSize = msoAutoSizeTextToFitShape
    }
}
```


```JavaScript
/*本示例显示活动窗口中选定的第一个形状是否根据文本自动调整大小。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.TextFrame2.AutoSize == msoAutoSizeShapeToFitText)
}
```
