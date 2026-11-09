# Font.Underline

返回或设置应用于字体的下划线类型。可读/写。



## 语法

express.**Underline**

express   一个代表 **Font** 对象的变量。

## 类型

MsoTriState

## 说明


 **Underline** 属性的值可以是其中一个 **MsoTriState** 常量：

| 常量 | 说明 |
| ---- | ---- |
| msoFalse | 指定的文本（或字体样式）不带下划线。 |
| msoTriStateMixed | 指定的文本中某些字符带下划线，某些字符则不带下划线。 |
| msoTrue | 指定的文本（或字体样式）带下划线。 |



## 示例


```JavaScript
/*以下示例给所选文本添加下划线。*/
function test() {
    let selection = ActiveWindow.Selection
    if (selection.Type == ppSelectionText) {
        selection.TextRange.Font.Underline = msoTrue
    } else {
        alert("You need to select some text.")
    }
}
```


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片第二个占位符中文本的格式。*/
function test() {
    let shapes = Application.ActivePresentation.Slides(1).Shapes.Placeholders(2)
    shapes.TextFrame.TextRange.Font.Size = 32
    shapes.TextFrame.TextRange.Font.Name = "Palatino"
    shapes.TextFrame.TextRange.Font.Underline = msoTrue
}
```
