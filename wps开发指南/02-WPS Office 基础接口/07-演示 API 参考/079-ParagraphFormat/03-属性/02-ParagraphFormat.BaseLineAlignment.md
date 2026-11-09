# ParagraphFormat.BaseLineAlignment

返回或设置指定段落的基准线对齐方式。可读/写。



## 语法

express.**BaseLineAlignment**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

PpBaselineAlignment

## 说明


 **BaseLineAlignment** 属性的值可以是 **[PpBaselineAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/enum/PpBaselineAlignment)** 常量之一。



## 示例


```JavaScript
/*本示例显示活动演示文稿中第一张幻灯片第二个形状中段落的基准线对齐方式是否为ppBaselineAlignAuto。*/
function test() {
    let textRange = ActivePresentation.Slides.Item(1).Shapes.Item(2).TextFrame.TextRange
    alert(textRange.ParagraphFormat.BaseLineAlignment == ppBaselineAlignAuto)
}
```


```JavaScript
/*本示例将活动窗口选定的（文本框）形状中文本段落的基准线对齐方式设置为ppBaselineAlignCenter。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    let paragraphFormat = shape.TextFrame.TextRange.ParagraphFormat
    paragraphFormat.BaseLineAlignment = ppBaselineAlignCenter
}
```
