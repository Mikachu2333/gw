# TextRange2.InsertAfter

在 **TextRange2** 对象中的现有文本的右侧插入文本。



## 语法

express.**InsertAfter(NewText)**

express   一个代表 **TextRange2** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NewText | 可选 | string | 包含要插入的文本。 |

## 返回值

TextRange2

## 示例


```JavaScript
/*本示例运行于演示组件，在活动演示文稿的第一张幻灯片上第一个形状（文本框）的文本的右侧插入文字。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let textRange2 = shape.TextFrame2.TextRange
    textRange2.InsertAfter("右")
}
```


```JavaScript
/*本示例运行于演示组件，在活动窗口所选形状（文本框）中的文本的右侧插入文字。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let textRange2 = textFrame2.TextRange
    textRange2.InsertAfter("右")
}
```
