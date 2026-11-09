# ParagraphFormat 对象

代表文本范围的段落格式。

## 说明


使用 [ **ParagraphFormat** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/member/ParagraphFormat) 属性返回 **ParagraphFormat** 对象。


## 示例


```JavaScript
/*本示例从左对齐活动演示文稿第一张幻灯片的第二个形状中的段落。*/
function test() {
    let textRange = ActivePresentation.Slides.Item(1).Shapes.Item(2).TextFrame.TextRange
    textRange.ParagraphFormat.Alignment = ppAlignLeft
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的标题文本框中的文本每段第一行前的间距大小。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let paragraphFormat = slide.Shapes.Title.TextFrame.TextRange.ParagraphFormat
    alert(paragraphFormat.SpaceBefore)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Alignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ParagraphFormat/member/Alignment) | 以指定的段落格式返回或设置每个段落的对齐方式。可读/写。 |
| [BaseLineAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ParagraphFormat/member/BaseLineAlignment) | 返回或设置指定段落的基准线对齐方式。可读/写。 |
| [Bullet](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ParagraphFormat/member/Bullet) | 返回一个 **[BulletFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/BulletFormat/obj)** 对象，该对象代表指定段落格式的项目符号格式设置。只读。 |
| [FarEastLineBreakControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ParagraphFormat/member/FarEastLineBreakControl) | 如果已指定亚洲语言设置，则返回或设置该换行控制选项。可读/写。 |
| [HangingPunctuation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ParagraphFormat/member/HangingPunctuation) | 如果已指定亚洲语言设置，则返回或设置标点溢出边界选项。可读/写。 |
| [LineRuleAfter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ParagraphFormat/member/LineRuleAfter) | 确定是否将每段最后一行后面的行距设为特定的磅数或行数。可读/写。 |
| [LineRuleBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ParagraphFormat/member/LineRuleBefore) | 确定是否将每段首行前面的行距设为特定的磅数或行数。可读写。 |
| [LineRuleWithin](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ParagraphFormat/member/LineRuleWithin) | 确定是否将基线间的行距设为特定的磅数或行数。可读/写。 |
| [SpaceAfter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ParagraphFormat/member/SpaceAfter) | 以磅或行为单位返回或设置指定文本中每段最后一行后的间距大小。可读/写。 |
| [SpaceBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ParagraphFormat/member/SpaceBefore) | 以磅或行为单位返回或设置指定文本中每段第一行前的间距大小。可读/写。 |
| [SpaceWithin](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ParagraphFormat/member/SpaceWithin) | 以磅或行为单位返回或设置指定文本中基准行之间的距离。可读/写。 |
| [TextDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ParagraphFormat/member/TextDirection) | 返回或设置指定段落的文本方向。可读/写。 |
| [WordWrap](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ParagraphFormat/member/WordWrap) | 如果 WPP 在指定文本段落的日本汉字字符中自动换行，则为 **msoTrue** 。可读/写。 |