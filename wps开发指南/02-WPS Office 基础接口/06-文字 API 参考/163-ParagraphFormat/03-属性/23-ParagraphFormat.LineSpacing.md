# ParagraphFormat.LineSpacing

返回或设置指定段落的行距（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**LineSpacing**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


使用 **[LinesToPoints](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/LinesToPoints)** 方法可将行数转换为相应的值（以磅为单位）。例如，`LinesToPoints(2)` 返回值 24。

可以在 **[LineSpacingRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ParagraphFormat/member/LineSpacingRule)** 属性已设置为下列值之后对 **LineSpacing** 属性进行设置：

* **wdLineSpaceAtLeast** 行距可以大于或等于指定的 **LineSpacing** 值，但绝不能小于该值。
* **wdLineSpaceExactly** 指定的 **LineSpacing** 行距值绝不能更改，即使段落中使用了较大的字体。
* **wdLineSpaceMultiple** 必须指定 **LineSpacing** 属性值，以磅为单位。



## 示例


```JavaScript
/*本示例将选定段落的行距设置为至少 24 磅。*/
function test() {
    let paragraphFormat = Selection.ParagraphFormat
    paragraphFormat.LineSpacingRule = wdLineSpaceAtLeast
    paragraphFormat.LineSpacing = 24
}
```


```JavaScript
/*本示例显示活动文档的段落的行距。*/
function test() {
    alert(ActiveDocument.Paragraphs.Format.LineSpacing)
}
```
