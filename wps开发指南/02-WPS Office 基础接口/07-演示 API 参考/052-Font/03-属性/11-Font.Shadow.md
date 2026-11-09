# Font.Shadow

确定指定的文本是否带有阴影。读/写。



## 语法

express.**Shadow**

express   一个代表 **Font** 对象的变量。

## 类型

MsoTriState

## 说明


 **Shadow** 属性的值可以是其中一个 **MsoTriState** 常量。

| 常量 | 说明 |
| ---- | ---- |
| msoFalse | 指定文本不带阴影。 |
| msoTriStateMixed | 某些指定文本有阴影，而某些没有。 |
| msoTrue | 指定文本带有阴影。 |



## 示例


```JavaScript
/*本示例为当前演示文稿第一张幻灯片的标题文本添加阴影。*/
function test() {
    let shape = Application.ActivePresentation.Slides(1).Shapes.Title
    shape.TextFrame.TextRange.Font.Shadow = msoTrue
}
```


```JavaScript
/*本示例判断如果选定内容中有一部分内容有阴影格式，则将全部选定内容的格式都设为阴影格式。*/
function test() {
    let selection = Application.Windows.Item(1).Selection
    if (selection.Type == ppSelectionText) {
        if (selection.TextRange.Font.Shadow == msoTriStateMixed) {
            selection.TextRange.Font.Shadow = msoTrue
        }
    } else {
        alert("You need to select some text.")
    }
}
```
