# TextFrame.WordWrap

确定是否自动换行以适应形状内部。可读/写。



## 语法

express.**WordWrap**

express   一个代表 **TextFrame** 对象的变量。

## 类型

MsoTriState

## 说明


 **WordWrap** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明             |
| ------------ | -------------- |
| **msoFalse** | 不为适应形状内部而自动换行。 |
| **msoTrue**  | 自动换行以适应形状内部。   |



## 示例


```JavaScript
/*本示例将包含文本的矩形添加到活动演示文稿第一张幻灯片中，然后关闭该新矩形内的换行功能。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let textFrame = slide.Shapes.AddShape(msoShapeRectangle, 0, 0, 100, 300).TextFrame
    textFrame.TextRange.Text = "Here is some test text that is too long for this box"
    textFrame.WordWrap = msoFalse
}
```


```JavaScript
/*本示例判断第一篇演示文稿的第一张幻灯片中的标题文本是否自动换行以适应形状内部。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Title
    if (shape.TextFrame.WordWrap == msoTrue) {
        alert("该形状内文本会自动换行。")
    } else {
        alert("该形状内文本不会自动换行。")
    }
}
```
