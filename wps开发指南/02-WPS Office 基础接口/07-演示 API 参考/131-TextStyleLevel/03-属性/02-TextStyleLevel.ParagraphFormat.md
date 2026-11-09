# TextStyleLevel.ParagraphFormat

返回一个 **[ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ParagraphFormat/obj)** 对象，该对象代表指定文本的段落格式。只读。



## 语法

express.**ParagraphFormat**

express   一个代表 **TextStyleLevel** 对象的变量。

## 类型

ParagraphFormat

## 示例


```JavaScript
/*本示例显示活动演示文稿的幻灯片母版的正文样式中第一个大纲级别的每段首行前面的行距是否为特定的行数。*/
function test() {
    let textStyle = ActivePresentation.SlideMaster.TextStyles.Item(ppBodyStyle)
    let paragraphFormat = textStyle.Levels.Item(1).ParagraphFormat
    alert(paragraphFormat.LineRuleBefore === msoTrue)
}
```


```JavaScript
/*本示例设置活动演示文稿的备注母版的正文样式中第一个大纲级别的段落的对齐方式为ppAlignCenter。*/
function test() {
    let textStyle = ActivePresentation.NotesMaster.TextStyles.Item(ppBodyStyle)
    let paragraphFormat = textStyle.Levels.Item(1).ParagraphFormat
    paragraphFormat.Alignment = ppAlignCenter
}
```
