# TextFrame.AutoSize

返回或设置一个值，该值指示是否自动更改指定形状的大小以使其中的文本适应边界。可读/写。



## 语法

express.**AutoSize**

express   一个代表 **TextFrame** 对象的变量。

## 类型

PpAutoSize

## 说明


| **AutoSize** 属性的值可以是其中一个 **PpAutoSize** 常量： |
| ------------------------------------------------------ |
| **ppAutoSizeMixed**                                    |
| **ppAutoSizeNone**                                     |
| **ppAutoSizeShapeToFitText**                           |



## 示例


```JavaScript
/*本示例使活动演示文稿第一张幻灯片中第一个形状的文本框能自动调整大小，以适应其中所包含的文字。*/
function test() {
    let shape = Application.ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.TextFrame.AutoSize = ppAutoSizeShapeToFitText
}
```


```JavaScript
/*本示例调整第一篇演示文稿中的第一个幻灯片的标题边界框的大小以适应标题文本。*/
function test() {
    let slide = Presentations.Item(1).Slides(1)
    let textFrame = slide.Shapes(1).TextFrame
    if (textFrame.TextRange.Characters().Count < 50) {
        textFrame.AutoSize = ppAutoSizeShapeToFitText
    }
}
```
