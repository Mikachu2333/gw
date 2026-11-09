# Font.Superscript

如果字体格式为上标，则该属性值为 **msoTrue** 。 **Long** 类型，可读/写。



## 语法

express.**Superscript**

express   一个代表 **Font** 对象的变量。

## 类型

MsoTriState

## 说明


将 **BaselineOffset** 属性设置为负值会自动将 **Superscript** 属性设置为 **msoFalse** ，将 **Subscript** 属性设置为 **msoTrue** 。

将 **BaselineOffset** 属性设置为正值会自动将 **Superscript** 属性设置为 **msoTrue** ，将 **Subscript** 属性设置为 **msoFalse** 。

将 **Superscript** 属性设置为 **msoTrue** 会自动将 **BaselineOffset** 属性设置为 0.3（30%）。

 **Superscript** 属性的值可以是其中一个 **MsoTriState** 常量：

| 常量 | 说明 |
| ---- | ---- |
| msoFalse | 指定的文本不是上标。默认值。 |
| msoTriStateMixed | 有些字符是上标，有些不是。 |
| msoTrue | 指定的文本是上标。 |



## 示例


```JavaScript
/*本示例设置第一张幻灯片第二个形状的文本，并将第五个字符设为上标。*/
function test() {
    let textRange = Application.ActivePresentation.Slides(1).Shapes(2).TextFrame.TextRange
    textRange.Text = "E=mc2"
    textRange.Characters(5, 1).Font.Superscript = msoTrue
}
```


```JavaScript
/*本示例检查所选文本的上标格式。*/
function test() {
    if (ActiveWindow.Selection.Type == ppSelectionText) {
        let superscript = ActiveWindow.Selection.TextRange.Font.Superscript
        if (superscript == msoTriStateMixed || superscript == msoTrue) {
            alert("Superscript text exists in the selection.")
        } else {
            alert("No superscript text in the selection.")
        }
    } else {
        alert("You need to select some text.")
    }
}
```
