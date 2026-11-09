# Ruler 对象

代表指定形状或指定样式中所有文本的标尺。包含大纲文本的制表位和缩进设置。

## 说明


使用 **TextFrame** 对象的 [ **Ruler** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame/member/Ruler) 属性返回代表指定形状中文本标尺的 **Ruler** 对象。使用 [ **TabStops** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Ruler/member/TabStops) 属性返回 **TabStops** 对象，其中包含标尺上的制表位。使用 [ **Levels** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Ruler/member/Levels) 属性返回 **RulerLevels** 对象，该对象包含文本大纲级别的缩进设置。


## 示例


```JavaScript
/*本示例为活动演示文稿的第一张幻灯片的第一个形状中的文本添加一个左对齐的制表位，然后设置该文本中第一个大纲级别的首行缩进值和左缩进值。*/
function test() {
    let ruler = ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame.Ruler
    ruler.TabStops.Add(ppTabStopLeft, 144)
    ruler.Levels.Item(1).FirstMargin = 0
    ruler.Levels.Item(1).LeftMargin = 36
}
```
使用 **TextStyle** 对象的 [ **Ruler** ](#TODO) 属性返回 **Ruler** 对象，该对象代表四种已定义文本样式之一（标题文本、正文文本、备注文本或默认文本）的标尺。



```JavaScript
/*本示例设置活动窗口所选的第一张幻灯片的第一个形状中文本的第一个大纲级别的首行缩进值和左缩进值。*/
function test() {
    let rulerLevel = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1).TextFrame.Ruler.Levels.Item(1)
    rulerLevel.FirstMargin = 9
    rulerLevel.LeftMargin = 54
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Levels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Ruler/member/Levels) | 返回一个代表大纲缩进格式的 **[RulerLevels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/RulerLevels/obj)** 对象。只读。 |
| [TabStops](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Ruler/member/TabStops) | 返回一个 **[TabStops](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TabStops/obj)** 集合，该集合代表指定文本的指标位。只读。 |