# CustomLayout 对象

代表与演示文稿设计关联的自定义版式。 **CustomLayout** 对象是 **[CustomLayouts](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CustomLayouts/obj)** 集合的成员。

## 说明


使用 **[Slide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/obj)** 或 **[SlideRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/obj)** 对象的 **CustomLayout** 属性可访问 **CustomLayout** 对象，例如：

```JavaScript
ActiveWindow.Selection.SlideRange.Item(1).CustomLayout
ActivePresentation.Slides.Item(1).CustomLayout
```

使用 **CustomLayouts** 集合的 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CustomLayouts/member/Add)** 方法可将一个新的自定义版式添加到演示文稿设计的自定义版式中。使用 **[Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CustomLayouts/member/Item)** 方法可引用自定义版式。使用 **[Paste](#TODO)** 方法可将剪贴板上的幻灯片粘贴到自定义版式中并将自定义版式添加到 **CustomLayouts** 集合中。


## 示例


```JavaScript
/*本示例设置活动窗口所选的第一张幻灯片关联的自定义版式的背景的前景填充色和背景的图案填充。*/
function test() {
    let customLayout = ActiveWindow.Selection.SlideRange.Item(1).CustomLayout
    customLayout.Background.Fill.ForeColor.RGB = RGB(255, 0, 0)
    customLayout.Background.Fill.Patterned(msoPatternCross)
}
```


```JavaScript
/*本示例显示活动演示文稿的幻灯片母版关联的最后一个自定义版式的宽度。*/
function test() {
    let customLayouts = ActivePresentation.SlideMaster.CustomLayouts
    alert(customLayouts.Item(customLayouts.Count).Width + " 磅")
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CustomLayout/member/Delete) | 删除指定的对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Background](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CustomLayout/member/Background) | 返回代表幻灯片背景的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj)** 对象。只读。 |
| [HeadersFooters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CustomLayout/member/HeadersFooters) | 返回一个 **[HeadersFooters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/obj)** 集合，该集合代表与指定的自定义版式关联的页眉、页脚、日期和时间以及幻灯片编号。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CustomLayout/member/Height) | 返回指定对象的高度，以磅为单位。只读。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CustomLayout/member/Index) | 返回 **[CustomLayouts](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CustomLayouts/obj)** 集合中指定的自定义版式的索引位置。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CustomLayout/member/Name) | 代表指定的自定义版式的显示名称。可读/写。 |
| [Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CustomLayout/member/Shapes) | 返回一个 **[Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/obj)** 集合，该集合代表包含在指定的自定义版式中的所有版式元素。只读。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CustomLayout/member/Width) | 返回指定的自定义版式的宽度，以磅为单位。只读。 |