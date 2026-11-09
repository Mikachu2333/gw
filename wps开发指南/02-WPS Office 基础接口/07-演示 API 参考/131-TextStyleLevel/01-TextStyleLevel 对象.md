# TextStyleLevel 对象

包含大纲级别的字符和段落格式信息。

## 说明


 **TextStyleLevel** 对象是 **[TextStyleLevels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextStyleLevels/obj)** 集合的成员。 **TextStyleLevels** 集合包含五个大纲级别中每个级别的 **TextStyleLevel** 对象。

使用 **Levels** (_index_) 返回单个 **TextStyleLevel** 对象，其中 _index_ 为 1 到 5 的数字，对应于五个大纲级别。


## 示例


```JavaScript
/*本示例设置活动演示文稿的幻灯片母版的正文样式中第一个大纲级别的字体格式和段落对齐方式，然后显示每段首行前面的行距是否为特定的行数。*/
function test() {
    let textStyleLevel = ActivePresentation.SlideMaster.TextStyles.Item(ppBodyStyle).Levels.Item(1)
    let font = textStyleLevel.Font
    font.Name = "Arial"
    font.Size = 36
    let paragraphFormat = textStyleLevel.ParagraphFormat
    paragraphFormat.Alignment = ppAlignJustify
    alert(paragraphFormat.LineRuleBefore === msoTrue)
}
```


```JavaScript
/*本示例显示活动演示文稿的备注母版的正文样式中第一个大纲级别的字体是否加粗。*/
function test() {
    let textStyle = ActivePresentation.NotesMaster.TextStyles.Item(ppBodyStyle)
    let font = textStyle.Levels.Item(1).Font
    alert(font.Bold === msoTrue)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextStyleLevel/member/Font) | 返回一个代表字符格式的 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/obj)** 对象。只读。 |
| [ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextStyleLevel/member/ParagraphFormat) | 返回一个 **[ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ParagraphFormat/obj)** 对象，该对象代表指定文本的段落格式。只读。 |