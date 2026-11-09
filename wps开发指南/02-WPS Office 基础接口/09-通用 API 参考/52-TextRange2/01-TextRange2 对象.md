# TextRange2 对象

代表 **Shape** 或 **ShapeRange** 对象中的文本框。

## 说明


此对象包含文本框中的文本，还包含控制文本框的对齐方式和定位的属性和方法。使用 **TextFrame2** 属性可返回 **[TextFrame2](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextFrame2/obj)** 对象。


## 示例


```JavaScript
/*本示例运行于表格组件，在第一张工作表中添加一个矩形，然后向矩形中添加文本并设置文本框的边距。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.AddShape(msoShapeRectangle, 0, 0, 250, 140)
    let textFrame2 = shape.TextFrame2
    textFrame2.TextRange.Text = "Here is some test text"
    textFrame2.MarginBottom = 10
    textFrame2.MarginLeft = 10
    textFrame2.MarginRight = 10
    textFrame2.MarginTop = 10
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作表上第一个形状（文本框）中文本范围的文本长度。*/
function test() {
    let textRange2 = ActiveSheet.Shapes.Item(1).TextFrame2.TextRange
    alert(textRange2.Length)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/member/Characters) | 返回一个 **TextRange2** 对象，该对象代表指定的文本字符子集。只读。 |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/member/Copy) | 复制一个 **TextRange2** 对象。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/member/Cut) | 删除指定对象并将其放到剪贴板中。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/member/Delete) | 删除一个 **TextRange2** 对象。 |
| [InsertAfter](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/member/InsertAfter) | 在 **TextRange2** 对象中的现有文本的右侧插入文本。 |
| [InsertBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/member/InsertBefore) | 在 **TextRange2** 对象中的现有文本的左侧插入文本。 |
| [InsertSymbol](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/member/InsertSymbol) | 将指定字体集合中的符号插入到由 **TextRange2** 对象所代表的文本范围中。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/member/Item) | 获取 **TextRange2** 对象中的索引号指定的文本范围。 |
| [Paragraphs](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/member/Paragraphs) | 获取一个 **TextRange2** 对象，该对象代表指定的文本段落子集。只读。 |
| [Paste](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/member/Paste) | 将剪贴板的内容粘贴到 **TextRange2** 对象中。 |
| [Runs](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/member/Runs) | 获取一个 **TextRange2** 对象，该对象代表指定的文本域子集。文本域由具有相同字体属性的一些字符组成。只读。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [BoundHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/member/BoundHeight) | 获取指定文本的文本边界框的高度（以磅为单位）。只读。 |
| [BoundLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/member/BoundLeft) | 获取指定文本的文本边界框的左坐标（以磅为单位）。只读。 |
| [BoundTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/member/BoundTop) | 获取指定文本的文本边界框的顶部坐标（以磅为单位）。只读。 |
| [BoundWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/member/BoundWidth) | 获取指定文本的文本边界框的宽度（以磅为单位）。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/member/Count) | 获取一个 **Long** 类型的值，该值指示 **TextRange2** 集合中的项数。只读。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/member/Font) | 返回一个 **Font2** 对象，该对象代表 **TextRange2** 对象的字符格式。只读。 |
| [LanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/member/LanguageID) | 获取或设置 **TextRange2** 对象的 **[MsoLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoLanguageID)** 类型的值。可读/写。 |
| [Length](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/member/Length) | 获取一个 **Long** 类型的值，该值代表文本范围的长度。只读。 |
| [ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/member/ParagraphFormat) | 返回一个 **ParagraphFormat** 对象，该对象代表指定文本的段落格式。只读。 |
| [Start](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/member/Start) | 获取一个 **Long** 类型的值，该值指示指定文本范围的起点。只读。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/member/Text) | 获取或设置一个 **String** 类型的值，该值代表文本范围中的文本。可读/写。 |