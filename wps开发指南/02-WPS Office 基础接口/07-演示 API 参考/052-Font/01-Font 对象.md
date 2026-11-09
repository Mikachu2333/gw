# Font 对象

表示文本或项目符号的字符格式。 **Font** 对象所在的 **Fonts** 集合。该 **Fonts** 集合包含在演示文稿中使用的所有字体。

## 说明


使用 [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/Font) 属性返回 **Font** 对象，该对象表示特定的项目符号、文本范围或指定大纲级别的字体属性。


## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片的标题文本，并设置字体属性。*/
function test() {
    let textRange = ActivePresentation.Slides(1).Shapes.Title.TextFrame.TextRange
    textRange.Text = "kingsoft"
    textRange.Font.Italic = msoTrue
    textRange.Font.Name = "Palatino"
    textRange.Font.Color.RGB = RGB(0, 0, 255)
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


```JavaScript
/*本示例设置第一篇演示文稿中第一张幻灯片的标题文本的字体属性。*/
function test() {
    let textRange = Application.Presentations.Item(1).Slides(1).Shapes.Title.TextFrame2.TextRange
    textRange.Font.Name = "Arial"
    textRange.Font.Italic = msoTrue
}
```


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片的第二个形状中文本的字体属性。*/
function test() {
    let textRange = Application.ActivePresentation.Slides(1).Shapes(2).TextFrame.TextRange
    textRange.Font.Bold = msoTrue
    textRange.Font.Name = "Arial"
    textRange.Font.Size = 24
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [BaselineOffset](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/member/BaselineOffset) | 返回或设置指定上标或下标字符的基准线偏移。可读/写。 |
| [Bold](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/member/Bold) | 决定字符格式是否为粗体。可读写。 |
| [Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/member/Color) | 返回或设置当前 **Font** 对象的颜色。可读写。 |
| [Emboss](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/member/Emboss) | 决定字符格式是否为浮雕效果。可读/写。 |
| [Italic](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/member/Italic) | 如果将字体或范围设置为倾斜格式，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/member/Name) | 返回或设置指定对象的名称。可读写。 |
| [NameAscii](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/member/NameAscii) | 返回或设置用于 ASCII 字符的字体（字符集编号在 0 到 127 范围内的字符）。可读/写。 |
| [NameComplexScript](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/member/NameComplexScript) | 返回或设置复杂文种字体名称。用于混合语言文本。可读写。 |
| [NameFarEast](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/member/NameFarEast) | 返回或设置亚洲字体名称。可读/写。 |
| [NameOther](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/member/NameOther) | 返回或设置字符集编号大于 127 的字符所用的字体。可读/写。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/member/Shadow) | 确定指定的文本是否带有阴影。读/写。 |
| [Size](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/member/Size) | 返回或设置字符大小（以磅为单位）。可读写。 |
| [Subscript](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/member/Subscript) | 如果字体格式为下标，则该属性值为 **msoTrue** 。 **Long** 类型，可读/写。 |
| [Superscript](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/member/Superscript) | 如果字体格式为上标，则该属性值为 **msoTrue** 。 **Long** 类型，可读/写。 |
| [Underline](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/member/Underline) | 返回或设置应用于字体的下划线类型。可读/写。 |