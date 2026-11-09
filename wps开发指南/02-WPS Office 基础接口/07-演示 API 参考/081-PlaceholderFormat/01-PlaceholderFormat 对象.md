# PlaceholderFormat 对象

包含专门应用于占位符的属性，例如占位符类型。

## 说明


使用 **[PlaceholderFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/PlaceholderFormat)** 属性返回一个 **PlaceholderFormat** 对象。


## 示例


```JavaScript
/*本示例判断活动演示文稿的第一张幻灯片的第一个占位符的类型，并在该占位符中添加文本。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    if (shapes.Placeholders.Count > 0) {
        let placeholderFormat = shapes.Placeholders.Item(1).PlaceholderFormat
        switch (placeholderFormat.Type) {
            case ppPlaceholderTitle:
                shapes.Item(1).TextFrame.TextRange.Text = "Title Text"
                break
            case ppPlaceholderCenterTitle:
                shapes.Item(1).TextFrame.TextRange.Text = "Centered Title Text"
                break
            default:
                alert("There are no headings or horizontal headings on this slide")
        }
    }
}
```


```JavaScript
/*本示例显示活动窗口所选的第一张幻灯片的最后一个占位符的类型是否为副标题。*/
function test() {
    let placeholders = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Placeholders
    let format = placeholders.Item(placeholders.Count).PlaceholderFormat
    alert(format.Type == ppPlaceholderSubtitle)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlaceholderFormat/member/Application) | 返回一个 **Application** 对象，该对象表示指定对象的创建者。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlaceholderFormat/member/Parent) | 返回指定对象的父对象。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlaceholderFormat/member/Type) | 返回一个 **PpPlaceholderType** 常量，该常量代表占位符的类型。只读。 |