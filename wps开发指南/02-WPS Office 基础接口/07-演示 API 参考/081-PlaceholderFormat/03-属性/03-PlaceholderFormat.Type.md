# PlaceholderFormat.Type

返回一个 **PpPlaceholderType** 常量，该常量代表占位符的类型。只读。



## 语法

express.**Type**

express   一个代表 **PlaceholderFormat** 对象的变量。

## 类型

PpPlaceholderType

## 说明


 **Type** 属性的值可以是 **[PpPlaceholderType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/enum/PpPlaceholderType)** 常量之一。



## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的第一个占位符的类型是否为ppPlaceholderCenterTitle。*/
function test() {
    let placeholders = ActivePresentation.Slides.Item(1).Shapes.Placeholders
    let format = placeholders.Item(1).PlaceholderFormat
    alert(format.Type == ppPlaceholderCenterTitle)
}
```


```JavaScript
/*本示例判断如果活动窗口所选的第一张幻灯片的最后一个占位符的类型为副标题，则通知用户。*/
function test() {
    let placeholders = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Placeholders
    let format = placeholders.Item(placeholders.Count).PlaceholderFormat
    if (format.Type == ppPlaceholderSubtitle) {
        alert("最后一个占位符的类型为副标题")
    }
}
```
