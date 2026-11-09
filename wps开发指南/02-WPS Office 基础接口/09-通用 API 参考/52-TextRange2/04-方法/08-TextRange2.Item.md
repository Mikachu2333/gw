# TextRange2.Item

获取 **TextRange2** 对象中的索引号指定的文本范围。



## 语法

express.**Item(Index)**

express   一个代表 **TextRange2** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 文本范围的索引号。 |

## 返回值

TextRange2

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片上第一个形状（文本框）的最后一个文本范围的文本边界框的高度和宽度。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let textRange2 = shape.TextFrame2.TextRange.Item(shape.TextFrame2.TextRange.Count)
    alert(`高度：${textRange2.BoundHeight} 磅\n宽度：${textRange2.BoundWidth} 磅`)
}
```


```JavaScript
/*本示例运行于演示组件，在活动窗口所选形状（文本框）的第一个文本范围的左侧插入文字。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let textRange2 = textFrame2.TextRange
    textRange2.Item(1).InsertBefore("左")
}
```
