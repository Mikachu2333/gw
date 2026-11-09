# Font.Reset

删除手动字符格式（不使用样式应用的格式）。例如，如果手动将单词设置为加粗格式，但基本样式为纯文本（不是粗体），则可用 **Reset** 方法删除加粗格式。



## 语法

express.**Reset()**

express   一个代表 **Font** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除选定部分中的手动设定的格式。*/
function test() {
    Application.Selection.Font.Reset()
}
```


```JavaScript
/*本示例判断如果活动文档的第一段的字体应用加粗格式，则删除该段落字体的手动设定的格式。*/
function test() {
    let font = ActiveDocument.Paragraphs.Item(1).Range.Font
    if (font.Bold == msoTrue) {
        font.Reset()
    }
}
```
