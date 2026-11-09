# Selection 对象

代表指定文档窗口中的选定范围。每次在幻灯片视图中更改幻灯片时， **Selection** 对象将被删除（ **Type** 属性将返回 **ppSelectionNone** ）。

## 说明


可以使用 **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DocumentWindow/member/Selection)** 属性返回 **Selection** 对象。


## 示例


```JavaScript
/*本示例将活动窗口的所选内容的副本放在剪贴板上。*/
function test() {
    ActiveWindow.Selection.Copy()
}
```
使用 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Selection/member/ShapeRange)** 、 **[SlideRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Selection/member/SlideRange)** 或 **[TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Selection/member/TextRange)** 属性可返回所选内容中的形状、幻灯片或文本范围。



```JavaScript
/*以下示例设置第二个窗口中选中形状的前景色，假设至少选中了一个形状且所有选中的形状具有可以改变前景色的填充。*/
function test() {
    let fillFormat = Windows.Item(2).Selection.ShapeRange.Fill
    fillFormat.Visible = msoTrue
    fillFormat.ForeColor.RGB = RGB(255, 0, 255)
}
```


```JavaScript
/*如果第二个窗口中的第一个选中形状包含一文本框，以下示例设置其中的文本。*/
function test() {
    let shape = Windows.Item(2).Selection.ShapeRange.Item(1)
    if (shape.HasTextFrame == msoTrue) {
        let textRange = shape.TextFrame.TextRange
        textRange.Text = "Current Choice"
    }
}
```


```JavaScript
/*以下示例剪切活动窗口中选中的所有幻灯片，将其放在剪贴板上。*/
function test() {
    ActiveWindow.Selection.SlideRange.Cut()
}
```


```JavaScript
/*以下示例将复制选中的所有幻灯片（如果位于幻灯片视图中，这将复制当前幻灯片）。*/
function test() {
    ActiveWindow.Selection.SlideRange.Duplicate()
}
```
如果您没有选中合适类型的对象时使用这些属性之一（例如，如果未选中任何形状时，您使用 **ShapeRange** 属性），则会发生错误。使用 **[Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Selection/member/Type)** 属性可以确定所选的对象类型。



```JavaScript
/*本示例检查选定内容是否包含幻灯片。如果所选内容包含幻灯片，该示例将设置所选的第一张幻灯片的背景。*/
function test() {
    let selection = Windows.Item(2).Selection
    if (selection.Type == ppSelectionSlides) {
        let slide = selection.SlideRange.Item(1)
        slide.FollowMasterBackground = msoFalse
        slide.Background.Fill.PresetGradient(msoGradientHorizontal, 1, msoGradientLateSunset)
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Selection/member/Copy) | 将指定对象复制到剪贴板。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Selection/member/Cut) | 删除指定对象并将其放到剪贴板中。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Selection/member/Delete) | 删除指定的 **Selection** 对象。 |
| [Unselect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Selection/member/Unselect) | 取消当前选择。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Selection/member/Application) | 返回一个 Application 对象，该对象表示指定对象的创建者。 |
| [ChildShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Selection/member/ChildShapeRange) | 返回一个代表选定范围的子形状的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj)** 对象。 |
| [HasChildShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Selection/member/HasChildShapeRange) | 如果所选内容包含子形状，则该属性值为 **True** 。只读 |
| [ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Selection/member/ShapeRange) | 返回一个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj)** 对象，该对象代表指定幻灯片上所有选定的幻灯片对象。只读。 |
| [SlideRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Selection/member/SlideRange) | 返回一个 **[SlideRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SlideRange/obj)** 对象，该对象代表选定的幻灯片范围。只读。 |
| [TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Selection/member/TextRange) | 返回一个 **[TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/obj)** 对象，该对象代表选定文本（ **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Selection/obj)** 对象）。只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Selection/member/Type) | 返回一个 **PpSelectionType** 常量，该常量代表选定内容中对象的类型。只读。 |