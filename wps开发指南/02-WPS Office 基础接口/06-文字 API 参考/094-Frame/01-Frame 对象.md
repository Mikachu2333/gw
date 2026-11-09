# Frame 对象

代表一个框架。 **Frame** 对象是 **Frames** 集合的一个成员。 **[Frames](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frames/obj)** 集合包含所选内容、范围或文档中的所有框架。

## 说明


使用 **Frames** (_Index_) 可返回一个 **Frame** 对象，其中 _Index_ 是索引号。索引号代表框架在所选内容、范围或文档中的位置。


## 示例


```JavaScript
/*此示例允许文本环绕活动文档中的第一个框架。*/
function test() {
    ActiveDocument.Frames.Item(1).TextWrap = true
}
```
使用 **Add** 方法可在某一范围周围添加图文框。



```JavaScript
/*本示例在活动文档的第一段添加框架。*/
function test() {
    ActiveDocument.Frames.Add(ActiveDocument.Paragraphs.Item(1).Range)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/member/Copy) | 将指定框架复制到剪贴板。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/member/Cut) | 将指定框架从文档中移到剪贴板上。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/member/Delete) | 删除指定框架。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/member/Select) | 选择指定的对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/member/Borders) | 返回一个 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/obj)** 集合，该集合代表指定框架的所有边框。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/member/Height) | 返回或设置一个 **Single** 类型的值，该值代表指定框架的高度。可读写。 |
| [HeightRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/member/HeightRule) | 返回或设置一个 **WdFrameSizeRule** 类型的值，该值代表用于确定指定框架高度的规则。可读写。 |
| [HorizontalDistanceFromText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/member/HorizontalDistanceFromText) | 返回或设置框架与周围文本之间的水平距离（以磅为单位）。 **Single** 类型，可读写。 |
| [HorizontalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/member/HorizontalPosition) | 返回或设置框架边缘与 **[RelativeHorizontalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/member/RelativeHorizontalPosition)** 属性指定的项之间的水平距离。可读写 **Single** 类型。 |
| [LockAnchor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/member/LockAnchor) | 如果指定框架处于锁定状态，则该属性值为 **True** 。可读写 **Boolean** 类型。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/member/Range) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表框架中包含的文档部分。 |
| [RelativeHorizontalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/member/RelativeHorizontalPosition) | 指定框架的相对水平位置。 **[WdRelativeHorizontalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdRelativeHorizontalPosition)** 类型，可读写。 |
| [RelativeVerticalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/member/RelativeVerticalPosition) | 指定框架的相对垂直位置。 **[WdRelativeVerticalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdRelativeVerticalPosition)** 类型，可读写。 |
| [Shading](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/member/Shading) | 返回一个 **Shading** 对象，该对象代表指定对象的底纹格式。 |
| [TextWrap](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/member/TextWrap) | 如果文档文字环绕指定的框架，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [VerticalDistanceFromText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/member/VerticalDistanceFromText) | 该属性返回或设置框架与环绕文字之间的垂直距离（以磅为单位）。 **Single** 类型，可读写。 |
| [VerticalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/member/VerticalPosition) | 返回或设置框架边缘与 **RelativeVerticalPosition** 属性指定的项之间的垂直距离。可读写 **Single** 类型。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/member/Width) | 返回或设置框架的宽度（以磅为单位）。可读写 **Long** 类型。 |
| [WidthRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frame/member/WidthRule) | 返回或设置用于确定框架宽度的规则。 **WdFrameSizeRule** 类型，可读写。 |