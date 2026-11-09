# TextStyle.Levels

返回一个代表大纲文本格式的 **[TextStyleLevels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextStyleLevels/obj)** 对象。只读。



## 语法

express.**Levels**

express   一个代表 **TextStyle** 对象的变量。

## 类型

TextStyleLevels

## 示例


```JavaScript
/*本示例显示活动演示文稿的幻灯片母版的正文样式中第一个大纲级别的字体的名称。*/
function test() {
    let textStyle = ActivePresentation.SlideMaster.TextStyles.Item(ppBodyStyle)
    alert(textStyle.Levels.Item(1).Font.Name)
}
```


```JavaScript
/*本示例显示活动演示文稿的备注母版的默认样式中第一个大纲级别的段落对齐方式是否为ppAlignLeft。*/
function test() {
    let textStyle = ActivePresentation.NotesMaster.TextStyles.Item(ppDefaultStyle)
    alert(textStyle.Levels.Item(1).ParagraphFormat.Alignment == ppAlignLeft)
}
```
