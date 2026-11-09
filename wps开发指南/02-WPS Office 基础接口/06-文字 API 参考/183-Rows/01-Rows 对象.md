# Rows 对象

 **[Row](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/obj)** 对象的集合，这些对象代表指定的选定内容、区域或表格中的表格行

## 说明


使用 **Rows** 属性可以返回 **Rows** 集合。


## 示例


```JavaScript
/*本示例将活动文档第一个表格的所有行设置为居中对齐。*/
function test() {
    ActiveDocument.Tables(1).Rows.Alignment = wdAlignRowCenter
}
```
使用 **Add** 方法向表中添加行。



```JavaScript
/*本示例在所选表格行前插入一行。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.Rows.Add(Selection.Rows.Item(1))
    }
}
```
使用 **Rows** (Index)（其中 Index 是索引号）返回单个 **Row** 对象。Index 表示行在所选内容、范围或表中的位置。



```JavaScript
/*本示例删除活动文档第一个表格的第一行。*/
function test() {
    ActiveDocument.Tables(1).Rows.Item(1).Delete()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/Add) | 返回一个 **Row** 对象，该对象代表添加到表中的行。 |
| [ConvertToText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/ConvertToText) | 将表格中的行转换为文本并返回一个 **Range** 对象，该对象代表带分隔符的文本。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/Delete) | 删除指定的表格行 |
| [DistributeHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/DistributeHeight) | 将指定行或单元格的高度调整为相等。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/Item) | 返回集合中的单个 **Row** 对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/Select) | 选择表格中行的集合。 |
| [SetHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/SetHeight) | 设置表格行的高度。 |
| [SetLeftIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/SetLeftIndent) | 设置表格中一行或多行的缩进。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Alignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/Alignment) | 返回或设置一个 **WdRowAlignment** 常量，该常量代表指定行的对齐方式。可读写。 |
| [AllowBreakAcrossPages](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/AllowBreakAcrossPages) | 如果允许分页符拆分表格中一行或多行中的文本，则该属性值为 **msoTrue** 。可读写 **Long** 类型。 |
| [AllowOverlap](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/AllowOverlap) | 返回或设置一个值，该值指定是否允许指定行与其他行重叠。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中的行数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [DistanceBottom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/DistanceBottom) | 返回或设置文档文字与指定表格下边缘之间的距离（以磅为单位）。 **Single** 类型，可读写。 |
| [DistanceLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/DistanceLeft) | 返回或设置文档文字与指定表格的左边缘之间的距离（以磅为单位）。 **Single** 类型，可读写。 |
| [DistanceRight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/DistanceRight) | 返回或设置文档文字与指定表格右边缘之间的距离（以磅为单位）。 **Single** 类型，可读写。 |
| [DistanceTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/DistanceTop) | 返回或设置文档文字与指定表格的上边缘之间的距离（以磅为单位）。 **Single** 类型，可读写。 |
| [First](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/First) | 返回一个 **[Row](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Row/obj)** 对象，该对象代表 **Rows** 集合中的第一个项目。 |
| [HeadingFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/HeadingFormat) | 如果将指定一行或数行的格式设置为表格标题，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/Height) | 返回或设置表格中指定的行的高度。Single 类型，可读写。 |
| [HeightRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/HeightRule) | 返回或设置确定指定单元格或行高度的规则。 **WdRowHeightRule** 类型，可读写。 |
| [HorizontalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/HorizontalPosition) | 返回或设置由 **RelativeHorizontalPosition** 属性指定的项目与行边缘之间的水平距离。可读写 **Single** 类型。 |
| [Last](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/Last) | 将 **Rows** 集合中的最后一项作为 **Row** 对象返回。 |
| [LeftIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/LeftIndent) | 返回或设置一个 **Single** 类型的值，该值代表指定表格行的左缩进值（以磅为单位）。可读写。 |
| [NestingLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/NestingLevel) | 返回指定表格行的嵌套层。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Rows** 对象的父对象。 |
| [RelativeHorizontalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/RelativeHorizontalPosition) | 指定一组行的相对水平位置。可读写 **[WdRelativeHorizontalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdRelativeHorizontalPosition)** 类型。 |
| [RelativeVerticalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/RelativeVerticalPosition) | 指定一组行的相对垂直位置。可读写 **[WdRelativeVerticalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdRelativeVerticalPosition)** 类型。 |
| [VerticalPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/VerticalPosition) | 返回或设置由 **RelativeVerticalPosition** 属性指定的项目与行边缘之间的垂直距离。可读写 **Single** 类型。 |
| [WrapAroundText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/member/WrapAroundText) | 返回或设置文本是否环绕指定行。 **Long** 类型，可读写。 |