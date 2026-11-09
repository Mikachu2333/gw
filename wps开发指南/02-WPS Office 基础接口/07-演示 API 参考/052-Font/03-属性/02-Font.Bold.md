# Font.Bold

决定字符格式是否为粗体。可读写。



## 语法

express.**Bold**

express   一个代表 **Font** 对象的变量。

## 类型

MsoTriState

## 说明


 **Bold** 属性的值可以是其中一个 **MsoTriState** 常量。

| 常量 | 说明 |
| ---- | ---- |
| msoFalse | 字符格式不是粗体。 |
| msoTriStateMixed | 指定的文本范围同时包含粗体和非粗体字符。 |
| msoTrue | 字符格式是粗体。 |



## 示例


```JavaScript
/*本示例判断如果选定内容中有一部分字体为加粗格式，则将全部选定内容的格式都设为加粗格式。*/
function test() {
    let selection = Application.Windows.Item(1).Selection
    if (selection.Type == ppSelectionText) {
        if (selection.TextRange.Font.Bold == msoTriStateMixed) {
            selection.TextRange.Font.Bold = msoTrue
        }
    } else {
        alert("You need to select some text.")
    }
}
```


```JavaScript
/*本示例将第一张幻灯片的标题中的第一到第五个字符设置为加粗。*/
function test() {
    let shape = Application.ActivePresentation.Slides(1).Shapes.Title
    shape.TextFrame.TextRange.Characters(1, 5).Font.Bold = msoTrue
}
```
