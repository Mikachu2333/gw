# Shape.PlaceholderFormat

返回一个 **[PlaceholderFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlaceholderFormat/obj)** 对象，该对象包含占位符特有的属性。只读。



## 语法

express.**PlaceholderFormat**

express   一个代表 **Shape** 对象的变量。

## 类型

PlaceholderFormat

## 示例


```JavaScript
/*本示例判断活动演示文稿的第一张幻灯片的第一个占位符的类型，并在该占位符中添加文本。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    if (shapes.Placeholders.Count > 0) {
        let placeholderFormat = shapes.Item(1).PlaceholderFormat
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
/*本示例显示第一个窗口所选的第一个占位符的类型是否为ppPlaceholderSubtitle。*/
function test() {
    let shape = Windows.Item(1).Selection.ShapeRange.Item(1)
    alert(shape.PlaceholderFormat.Type == ppPlaceholderSubtitle)
}
```
