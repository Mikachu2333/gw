# Font.Subscript

如果字体格式为下标，则该属性值为 **msoTrue** 。 **Long** 类型，可读/写。



## 语法

express.**Subscript**

express   一个代表 **Font** 对象的变量。

## 类型

MsoTriState

## 说明


将 **BaselineOffset** 属性设置为负值会自动将 **Subscript** 属性设置为 **msoTrue** ，将 **Superscript** 属性设置为 **msoFalse** 。

将 **BaselineOffset** 属性设置为正值会自动将 **Subscript** 属性设置为 **msoFalse** ，将 **Superscript** 属性设置为 **msoTrue** 。

将 **Subscript** 属性设置为 **msoTrue** 会自动将 **BaselineOffset** 属性设置为 -0.25（-25%）。

 **Subscript** 属性的值可以是其中一个 **MsoTriState** 常量：

| 常量 | 说明 |
| ---- | ---- |
| msoFalse | 指定的文本不是下标。默认值。 |
| msoTriStateMixed | 有些字符是下标，有些不是。 |
| msoTrue | 指定的文本是下标。 |



## 示例


```JavaScript
/*本示例判断如果活动演示文稿上第一张幻灯片的标题的第一个字符为下标，则将该字符放大。*/
function test() {
    let textRange = Application.ActivePresentation.Slides(1).Shapes.Title.TextFrame.TextRange
    let font = textRange.Characters(1, 1).Font
    if (font.Subscript == msoTrue) {
        let scaleChar = -20 * font.BaselineOffset
        font.Size *= scaleChar
    }
}
```


```JavaScript
/*本示例检查所选文本的下标格式。*/
function test() {
    if (ActiveWindow.Selection.Type == ppSelectionText) {
        let subscript = ActiveWindow.Selection.TextRange.Font.Subscript
        if (subscript == msoTriStateMixed || subscript == msoTrue) {
            alert("Subscript text exists in the selection.")
        } else {
            alert("No subscript text in the selection.")
        }
    } else {
        alert("You need to select some text.")
    }
}
```
