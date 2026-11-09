# HeaderFooter.UseFormat

决定日期和时间对象是否包含自动更新的信息。可读/写。



## 语法

express.**UseFormat**

express   一个代表 **HeaderFooter** 对象的变量。

## 类型

MsoTriState

## 说明


此属性仅适用于 **[HeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeaderFooter/obj)** 对象，该对象代表日期和时间（由 **[DateAndTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/member/DateAndTime)** 属性返回）。如果希望使用 **Format** 属性来设置或返回日期合时间的格式，请将日期和时间的 **HeaderFooter** 对象的 **UseFormat** 属性设为 **msoTrue** 。如果希望设置或返回固定日期和时间的文本字符串，请将 **UseFormat** 属性设为 **msoFalse** 。

 **UseFormat** 属性的值可以是下列 **MsoTriState** 常量之一。

| **常量** | **说明** |
| ----- | ----- |
| **msoFalse** | 日期和时间对象是固定字符串。 |
| **msoTrue** | 日期和时间对象包含自动更新的信息。 |



## 示例


```JavaScript
/*本示例将当前演示文稿的幻灯片母版中的日期和时间设为自动更新，并将日期和时间格式设为显示小时、分钟和秒。*/
function test() {
    let headerFooter = ActivePresentation.SlideMaster.HeadersFooters.DateAndTime
    headerFooter.UseFormat = msoTrue
    headerFooter.Format = ppDateTimeHmmss
}
```


```JavaScript
/*本示例显示活动窗口所选的第一张幻灯片的日期和时间是否自动更新。*/
function test() {
    let headerFooter = ActiveWindow.Selection.SlideRange.Item(1).HeadersFooters.DateAndTime
    alert(headerFooter.UseFormat === msoTrue)
}
```
