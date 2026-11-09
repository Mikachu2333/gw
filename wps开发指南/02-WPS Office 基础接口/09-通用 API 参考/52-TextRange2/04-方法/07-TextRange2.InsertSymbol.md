# TextRange2.InsertSymbol

将指定字体集合中的符号插入到由 **TextRange2** 对象所代表的文本范围中。



## 语法

express.**InsertSymbol(FontName, CharNumber, Unicode)**

express   一个代表 **TextRange2** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FontName | 必选 | string | 字体集的名称。 |
| CharNumber | 必选 | number（int 精度） | 符号的编号。 |
| Unicode | 可选 | MsoTriState | 指示是否将符号的值指定为 Unicode 值。 |

## 返回值

TextRange2

## 示例


```JavaScript
/*本示例运行于演示组件，在活动演示文稿的第一张幻灯片上第一个形状（文本框）的文本范围插入指定字体集合中的符号。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let textRange2 = shape.TextFrame2.TextRange
    textRange2.InsertSymbol("宋体", 169)
}
```


```JavaScript
/*本示例运行于演示组件，在活动窗口所选形状（文本框）的文本范围插入指定字体集合中的符号。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let textRange2 = textFrame2.TextRange
    textRange2.InsertSymbol("Calibri", 174, msoTrue)
}
```
