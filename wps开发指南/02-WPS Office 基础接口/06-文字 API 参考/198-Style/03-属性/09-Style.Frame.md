# Style.Frame

返回一个 **[Frame](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/obj)** 对象，该对象代表指定样式的框架格式。只读。



## 语法

express.**Frame**

express   一个代表 **Style** 对象的变量。

## 类型

Frame

## 示例


```JavaScript
/*本示例创建一个带框架格式的样式，然后将该样式用于选定内容的第一段。*/
function test() {
    let frame = ActiveDocument.Styles.Add("frame", wdStyleTypeParagraph).Frame
    frame.RelativeHorizontalPosition = wdRelativeHorizontalPositionMargin
    frame.HeightRule = wdFrameAuto
    frame.WidthRule = wdFrameAuto
    frame.TextWrap = true
    Selection.Paragraphs.Item(1).Range.Style = "frame"
}
```


```JavaScript
/*本示例显示所选区域的样式的框架格式确定宽度的规则是否为wdFrameAuto。*/
function test() {
    alert(Selection.Range.Style.Frame.WidthRule == wdFrameAuto)
}
```
