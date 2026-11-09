# TextRange.Find

在一个文本范围内查找指定的文本，并返回 **[TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/obj)** 对象，该对象代表在其中找到指定的文本的第一个文本范围。如果找不到指定的文本，则返回 **null** 。



## 语法

express.**Find(FindWhat, After, MatchCase, WholeWords)**

express   一个代表 **TextRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FindWhat | 必选 | string | 要搜索的文本。 |
| After | 可选 | number（int 精度） | 指定文本范围内的字符位置，将从该字符开始搜索下一处 FindWhat 匹配内容。例如，如果要从文本范围的第五个字符开始搜索，可指定 After 为 4。如果忽略该参数，则将文本范围的第一个字符作为搜索的起始点。 |
| MatchCase | 可选 | MsoTriState | 如果此属性为 **msoTrue** ，则搜索时区分字符的大小写。 |
| WholeWords | 可选 | MsoTriState | 如果此属性为 **msoTrue** ，则搜索时仅查找整个词，而不搜索较长单词的部分字符。 |

## 返回值

TextRange

## 示例


```JavaScript
/*本示例在当前演示文稿中查找所有“CompanyX”字符串，并将其格式设为加粗。*/
function test() {
    let slides = ActivePresentation.Slides
    for (let i = slides.Count; i > 0; i--) {
        for (let j = slides.Item(i).Shapes.Count; j > 0; j--) {
            if (slides.Item(i).Shapes.Item(j).HasTextFrame == msoTrue) {
                let textRange = slides.Item(i).Shapes.Item(j).TextFrame.TextRange
                let foundText = textRange.Find("CompanyX")
                while (foundText != null) {
                    foundText.Font.Bold = true
                    foundText = textRange.Find("CompanyX", foundText.Start + foundText.Text.length - 1)
                }
            }
        }
    }
}
```


```JavaScript
/*本示例在活动演示文稿的第一张幻灯片的第一个形状中查找“test”字符串，并将其颜色设置为绿色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    textRange = shape.TextFrame.TextRange.Find("test", 0, msoTrue, msoFalse)
    textRange.Font.Color.RGB = RGB(0, 255, 0)
}
```
