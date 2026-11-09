# Font.Emboss

决定字符格式是否为浮雕效果。可读/写。



## 语法

express.**Emboss**

express   一个代表 **Font** 对象的变量。

## 类型

MsoTriState

## 说明


 **Emboss** 属性的值可以是下列 **MsoTriState** 常量之一。

| 常量                   | 说明                        |
| -------------------- | ------------------------- |
| **msoFalse**         | 字符格式不是浮雕效果。               |
| **msoTriStateMixed** | 指定的文本范围同时包含浮雕效果和非浮雕效果的字符。 |
| **msoTrue**          | 字符格式是浮雕效果。                |



## 示例


```JavaScript
/*本示例将活动演示文稿上第一张幻灯片的标题文本设置为浮雕效果。*/
function test() {
    let title = Application.ActivePresentation.Slides(1).Shapes.Title
    title.TextFrame.TextRange.Font.Emboss = msoTrue
}
```


```JavaScript
/*本示例判断如果选定内容中有一部分字体为浮雕格式，则将全部选定内容的格式都设为浮雕格式。*/
function test() {
    let selection = Application.Windows.Item(1).Selection
    if (selection.Type == ppSelectionText) {
        if (selection.TextRange.Font.Emboss == msoTriStateMixed) {
            selection.TextRange.Font.Emboss = msoTrue
        }
    } else {
        alert("You need to select some text.")
    }
}
```
