# TextRange 对象

包含附加到形状的文本，以及用于操作文本的属性和方法。

## 说明


以下示例说明如何执行下列操作：

* 返回任意指定形状中的文本范围。

* 返回选定范围中的文本范围。

* 返回文本范围中的特定字符、单词、行、句子或段落。

* 查找和替换文本范围内的文本。

* 向文本范围中插入文本、日期和时间或幻灯片编号。

* 将光标定位到文本范围内所需的任意位置。

使用 **TextFrame** 对象的 **TextRange** 属性可返回指定的任何形状的 **TextRange** 对象。使用 **Text** 属性返回 **TextRange** 对象中的文本字符串。


## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中添加一个矩形并设置其包含的文本。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeRectangle, 0, 0, 250, 140)
    shape.TextFrame.TextRange.Text = "Here is some test text"
}
```


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一个形状的文本。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.TextFrame.TextRange.Text = "Here is some test text"
}
```
使用 **HasTextFrame** 属性判断形状是否含有文本框，然后使用 **HasText** 属性判断该文本框是否包含文本。

使用 **Selection** 对象的 **TextRange** 属性返回当前选定的文本。



```JavaScript
/*本示例将选定内容的字体格式设置为加粗。*/
function test() {
    let textRange = ActiveWindow.Selection.TextRange
    textRange.Font.Bold = msoTrue
}
```
使用下列方法之一可返回 **TextRange** 对象中的部分文本： **[Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/Characters)** 、 **Lines** 、 **[Paragraphs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/Paragraphs)** 、 **Runs** 、 **Sentences** 或 **Words** 。

使用 **Find** 和 **Replace** 方法可查找和替换文本范围内的文本。

使用下列方法之一可向 **TextRange** 对象中插入字符： **[InsertAfter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/InsertAfter)** 、 **[InsertBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/InsertBefore)** 、 **[InsertDateTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/InsertDateTime)** 、[ **InsertSlideNumber** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/InsertSlideNumber) 或 **[InsertSymbol](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/InsertSymbol)** 。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/Characters) | 返回一个 **[TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/obj)** 对象，该对象代表指定的文本字符子集。有关计算或浏览一段文本中的字符的详细信息，请参阅 **[TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/obj)** 对象。 |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/Copy) | 将指定对象复制到剪贴板。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/Cut) | 删除指定对象并将其放到剪贴板中。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/Delete) | 删除指定的 **TextRange** 对象。 |
| [Find](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/Find) | 在一个文本范围内查找指定的文本，并返回 **[TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/obj)** 对象，该对象代表在其中找到指定的文本的第一个文本范围。如果找不到指定的文本，则返回 **null** 。 |
| [InsertAfter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/InsertAfter) | 在指定文本范围的末尾添加一个字符串。返回一个代表添加文本的 **TextRange** 对象。省略参数时，该方法返回一个在指定范围末尾的长度为零的字符串。 |
| [InsertBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/InsertBefore) | 在指定文本范围的开头添加一个字符串。返回一个代表添加文本的 **TextRange** 对象。省略参数时，该方法返回一个在指定范围开头的长度为零的字符串。 |
| [InsertDateTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/InsertDateTime) | 在指定的文本范围中插入日期和时间。返回一个代表所插入文本的 **TextRange** 对象。 |
| [InsertSlideNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/InsertSlideNumber) | 将当前幻灯片的幻灯片编号插入指定的文本范围。返回一个代表幻灯片编号的 **TextRange** 对象。 |
| [InsertSymbol](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/InsertSymbol) | 返回一个 **[TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/obj)** 对象，该对象代表一个插入到指定文本范围的符号。 |
| [Lines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/Lines) | 返回一个 **[TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/obj)** 对象，该对象代表指定的文本行子集。有关计算或浏览文本范围中文本行的信息，请参阅 **[TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/obj)** 对象。 |
| [Paragraphs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/Paragraphs) | 返回一个 **TextRange** 对象，该对象代表文本段落的指定子集。 |
| [Paste](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/Paste) | 将剪贴板上的文本粘贴到指定的文本范围中，并返回一个代表粘贴文本的 **TextRange** 对象。 |
| [PasteSpecial](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/PasteSpecial) | 以指定格式用剪贴板的内容替换文本范围。 |
| [Replace](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/Replace) | 在文本范围内查找特定文本，用指定的字符串替换查找到的文本，返回代表查找文本的第一处匹配内容的 **TextRange** 对象。如果找不到匹配的内容，则返回 **null** 。 |
| [Runs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/Runs) | 返回一个 **TextRange** 对象，该对象代表指定的文本域子集。文本域由具有相同字体属性的一些字符组成。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/Select) | 选择指定的对象。 |
| [TrimText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/TrimText) | 返回一个 **TextRange** 对象，该对象代表除去结尾空格的指定文本。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ActionSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/ActionSettings) | 返回一个 **[ActionSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ActionSettings/obj)** 对象，该对象包含在幻灯片放映期间，当用户在指定形状或文本区域内单击或移动鼠标时所发生的操作的相关信息。只读。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象，该对象表示指定对象的创建者。 |
| [BoundHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/BoundHeight) | 返回指定文本框的文本边界框的高度（以磅为单位）。只读。 |
| [BoundLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/BoundLeft) | 返回指定文本框的文本边界框的左边缘到幻灯片的左边缘的距离（以磅为单位）。只读。 |
| [BoundTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/BoundTop) | 返回指定文本框的文本边界框的顶端到幻灯片的顶端的距离（以磅为单位）。只读。 |
| [BoundWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/BoundWidth) | 返回指定文本框的文本边界框的宽度（以磅为单位）。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/Count) | 返回指定集合中的对象数目。只读。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/Font) | 返回一个代表字符格式的 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/obj)** 对象。只读。 |
| [IndentLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/IndentLevel) | 以 1 到 5 的整数返回或设置指定文本的缩进级别，其中 1 指示第一级段落不缩进。可读/写。 |
| [LanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/LanguageID) | 返回或设置指定文本范围的语言。可读/写。 |
| [Length](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/Length) | 返回指定文本区域的长度（以字符数为单位）。只读。 |
| [ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/ParagraphFormat) | 返回一个 **ParagraphFormat** 对象，该对象代表指定文本的段落格式。只读。 |
| [Start](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/Start) | 返回指定文本区域内第一个字符相对于该文本所在形状内第一个字符的位置。只读。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/Text) | 返回或设置一个 **String** 类型值，该值代表指定对象中包含的文本。可读/写。 |