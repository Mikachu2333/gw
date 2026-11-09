# ParagraphFormat2 对象

代表文本范围的段落格式。


## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框）的文本的段落的对齐方式设置为 msoAlignLeft。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    let paragraphFormat2 = shapes.Item(1).TextFrame2.TextRange.ParagraphFormat
    paragraphFormat2.Alignment = msoAlignLeft
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框）的文本段落的左缩进值。*/
function test() {
    let textRange2 = ActiveWindow.Selection.ShapeRange.TextFrame2.TextRange
    let paragraphFormat2 = textRange2.ParagraphFormat
    alert(paragraphFormat2.LeftIndent)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Alignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ParagraphFormat2/member/Alignment) | 获取或设置一个值，该值指定段落的对齐方式。可读写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ParagraphFormat2/member/Application) | 获取一个代表包含该对象的应用程序的对象。只读。 |
| [BaselineAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ParagraphFormat2/member/BaselineAlignment) | 获取或设置一个常量，该常量代表段落中字体的垂直位置。可读写。 |
| [Bullet](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ParagraphFormat2/member/Bullet) | 获取段落的 **BulletFormat2** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ParagraphFormat2/member/Creator) | 获取一个值，该值代表创建 **ParagraphFormat2** 对象的应用程序。只读。 |
| [FarEastLineBreakLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ParagraphFormat2/member/FarEastLineBreakLevel) | 获取或设置指定段落的东亚换行符控制级别。可读写。 |
| [FirstLineIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ParagraphFormat2/member/FirstLineIndent) | 获取或设置首行缩进或悬挂缩进的值（以磅值表示）。可读写。 |
| [HangingPunctuation](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ParagraphFormat2/member/HangingPunctuation) | 确定指定段落中的标点是否可以溢出边界。可读写。 |
| [LeftIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ParagraphFormat2/member/LeftIndent) | 返回或设置一个值，该值代表指定段落的左缩进值（以磅为单位）。可读写。 |
| [LineRuleAfter](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ParagraphFormat2/member/LineRuleAfter) | 确定是否将每段最后一行后面的行距设为特定的磅数或行数。可读写。 |
| [LineRuleBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ParagraphFormat2/member/LineRuleBefore) | 确定是否将每段首行前面的行距设为特定的磅数或行数。可读写。 |
| [LineRuleWithin](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ParagraphFormat2/member/LineRuleWithin) | 确定是否将基线间的行距设为特定的磅数或行数。可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ParagraphFormat2/member/Parent) | 获取 **ParagraphFormat2** 对象的父对象。只读。 |
| [SpaceAfter](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ParagraphFormat2/member/SpaceAfter) | 获取或设置指定段落的段后间距（以磅为单位）。可读写。 |
| [SpaceBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ParagraphFormat2/member/SpaceBefore) | 获取或设置指定段落的段前间距（以磅为单位）。可读写。 |
| [SpaceWithin](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ParagraphFormat2/member/SpaceWithin) | 获取或设置指定段落中基准行之间的距离（以磅或行为单位）。可读写。 |
| [TabStops](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ParagraphFormat2/member/TabStops) | 获取一个代表指定段落的所有自定义制表位的 **TabStops2** 集合。只读。 |
| [TextDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ParagraphFormat2/member/TextDirection) | 获取或设置指定段落的文本方向。可读写。 |
| [WordWrap](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ParagraphFormat2/member/WordWrap) | 确定应用程序是否在指定段落的语句中对拉丁语文本换行。可读写。 |