# TextStyles 对象

标题文本、正文文本和默认文本这三种文本样式的集合，其中每种文本样式由一个 **[TextStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextStyle/obj)** 对象代表。

## 说明


每种文本样式包含一个 **[TextFrame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/obj)** 对象，用以描述文本在文本边界框中的放置方式；一个 **[Ruler](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Ruler/obj)** 对象，用以包含制表位和大纲缩进格式信息；一个 **[TextStyleLevels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextStyleLevels/obj)** 集合，用以包含大纲文本格式信息。

使用 **TextStyles** (_index_) 返回单个 **ppBodyStyle** 对象，其中 _index_ 是 **ppDefaultStyle** 、 **ppTitleStyle** 或 **TextStyle** 。


## 示例


```JavaScript
/*本示例设置活动演示文稿的备注母版的正文样式的文本框的边距。*/
function test() {
    let textStyles = ActivePresentation.NotesMaster.TextStyles
    let textFrame = textStyles.Item(ppBodyStyle).TextFrame
    textFrame.MarginBottom = 50
    textFrame.MarginLeft = 50
    textFrame.MarginRight = 50
    textFrame.MarginTop = 50
}
```


```JavaScript
/*本示例设置活动演示文稿的幻灯片母版的正文样式中第一个大纲级别的字体名称和字号。*/
function test() {
    let textStyle = ActivePresentation.SlideMaster.TextStyles.Item(ppBodyStyle)
    let font = textStyle.Levels.Item(1).Font
    font.Name = "Arial"
    font.Size = 36
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextStyles/member/Item) | 从指定的 **[TextStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextStyles/obj)** 集合中返回单个文本样式。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextStyles/member/Count) | 返回指定集合中的对象数。只读。 |