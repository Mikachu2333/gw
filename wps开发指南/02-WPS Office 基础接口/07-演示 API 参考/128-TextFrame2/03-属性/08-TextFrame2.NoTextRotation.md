# TextFrame2.NoTextRotation

指示是否使用 **TextFrame2** 旋转功能旋转文本。 **MsoTriState** 常量之一。可读写。



## 语法

express.**NoTextRotation**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

MsoTriState

## 说明


如果将 **NoTextRotation** 属性的值设置为 msoTrue，则文本保持水平。



## 示例


```JavaScript
/*本示例判断如果活动窗口选定的第一个形状中包含文本，则设置该形状的文本保持水平。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    let textFrame2 = shape.TextFrame2
    if (textFrame2.HasText == msoTrue) {
        textFrame2.NoTextRotation = msoTrue
    }
}
```


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的标题文本是否随文本框旋转。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Title
    alert(shape.TextFrame2.NoTextRotation == msoFalse)
}
```
