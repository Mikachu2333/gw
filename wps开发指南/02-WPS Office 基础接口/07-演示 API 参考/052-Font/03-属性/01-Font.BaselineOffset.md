# Font.BaselineOffset

返回或设置指定上标或下标字符的基准线偏移。可读/写。



## 语法

express.**BaselineOffset**

express   一个代表 **Font** 对象的变量。

## 类型

number（float 精度）

## 说明


 **BaselineOffset** 属性值可为 -1 到 1 之间的浮点值。值为 -1 代表 -100% 的偏移，值为 1 表示偏移量为 100%。

如果将 **BaselineOffset** 属性设置为负值，则自动将 **Subscript** 属性设置为 **msoTrue** ，并将 **Superscript** 属性设置为 **msoFalse** 。

如果将 **BaselineOffset** 属性设置为正值，则自动将 **Subscript** 属性设置为 **msoFalse** ，并将 **Superscript** 属性设置为 **msoTrue** 。

如果将 **Superscript** 属性设置为 **msoTrue** ，则自动将 **BaselineOffset** 属性设置为 0.3 （30%）。

如果将 **Subscript** 属性设置为 **msoTrue** ，则自动将 **BaselineOffset** 属性设置为 -0.25（-25%）。



## 示例


```JavaScript
/*本示例为第一张幻灯片上的第二个形状设置文本，并将文本第二个字符的下标偏移量设置为 20%。*/
function test() {
    let textRange = Application.ActivePresentation.Slides(1).Shapes(2).TextFrame.TextRange
    textRange.Text = "H2O"
    textRange.Characters(2, 1).Font.BaselineOffset = -0.2
}
```


```JavaScript
/*本示例显示所选文本的字符的基准线偏移量。*/
function test() {
    if (ActiveWindow.Selection.Type == ppSelectionText) {
        let baselineOffset = ActiveWindow.Selection.TextRange.Font.BaselineOffset
        alert(`${baselineOffset * 100}%`)
    } else {
        alert("You need to select some text.")
    }
}
```
