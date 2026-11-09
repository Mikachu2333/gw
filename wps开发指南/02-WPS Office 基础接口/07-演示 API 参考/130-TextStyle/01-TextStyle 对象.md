# TextStyle 对象

代表三种文本样式之一：标题文本、正文文本或默认文本。每种文本样式包含一个 **[TextFrame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/obj)** 对象，用以描述文本在文本边界框中的放置方式；一个 **[Ruler](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Ruler/obj)** 对象，用以包含制表位和大纲缩进格式信息；一个 **[TextStyleLevels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextStyleLevels/obj)** 集合，用以包含大纲文本格式信息。 **TextStyle** 对象是 **[TextStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextStyles/obj)** 集合的成员。

## 说明


使用 **TextStyles** (_index_) 返回单个 **ppBodyStyle** 对象，其中 _index_ 是 **ppDefaultStyle** 、 **ppTitleStyle** 或 **TextStyle** 。


## 示例


```JavaScript
/*本示例设置活动演示文稿的幻灯片母版的正文样式中第一个大纲级别的字体的名称和字号。*/
function test() {
    let textStyle = ActivePresentation.SlideMaster.TextStyles.Item(ppBodyStyle)
    let font = textStyle.Levels.Item(1).Font
    font.Name = "Arial"
    font.Size = 36
}
```


```JavaScript
/*本示例向活动演示文稿的幻灯片母版的标题样式的文本框的末尾添加文本。*/
function test() {
    let textStyles = ActivePresentation.SlideMaster.TextStyles
    let textFrame = textStyles.Item(ppTitleStyle).TextFrame
    textFrame.TextRange.InsertAfter("example")
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Levels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextStyle/member/Levels) | 返回一个代表大纲文本格式的 **[TextStyleLevels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextStyleLevels/obj)** 对象。只读。 |
| [TextFrame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextStyle/member/TextFrame) | 返回一个 **[TextFrame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/obj)** 对象，该对象包含指定形状或母版文本样式的对齐方式和定位属性。 |