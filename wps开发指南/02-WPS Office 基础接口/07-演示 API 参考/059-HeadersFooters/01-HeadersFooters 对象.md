# HeadersFooters 对象

包含指定幻灯片、备注页、讲义或母版上的所有 **[HeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeaderFooter/obj)** 对象。

## 说明


每个 **HeaderFooter** 对象代表一个页眉、页脚、日期和时间或幻灯片编号。

 **HeaderFooter** 对象不适用于表示备注页面的 **[Slide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/obj)** 对象。表示页眉的 **HeaderFooter** 对象仅适用于备注母版或讲义母版。

使用 **[HeadersFooters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Slide/member/HeadersFooters)** 属性返回的 **HeadersFooters** 对象。使用 **[DateAndTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/member/DateAndTime)** 、 **[Footer](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/member/Footer)** 、 **[Header](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/member/Header)** 或 **[SlideNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/member/SlideNumber)** 属性以返回单个 **HeaderFooter** 对象。


## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片的页脚文本。*/
function test() {
    let headersFooters = ActivePresentation.Slides.Item(1).HeadersFooters
    headersFooters.Footer.Text = "Volcano Coffee"
}
```


```JavaScript
/*本示例设置活动窗口所选的第一张幻灯片的日期和时间的格式。*/
function test() {
    let headersFooters = ActiveWindow.Selection.SlideRange.Item(1).HeadersFooters
    headersFooters.DateAndTime.Format = ppDateTimeHmmss
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/member/Clear) | 清除指定幻灯片的页眉和页脚。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/member/Application) | 返回一个 **Application** 对象，该对象表示指定对象的创建者。 |
| [DateAndTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/member/DateAndTime) | 返回一个代表日期和时间项的 **[HeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeaderFooter/obj)** 对象，该项将显示在幻灯片的左下角，或者备注页、讲义或大纲的右上角。只读。 |
| [DisplayOnTitleSlide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/member/DisplayOnTitleSlide) | 决定标题幻灯片上是否显示页脚、日期和时间以及幻灯片编号。适用于幻灯片母版。可读/写。 |
| [Footer](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/member/Footer) | 返回一个 **[HeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeaderFooter/obj)** 对象，该对象代表显示于幻灯片底部或者备注页、讲义或大纲的左下角的页脚。只读。 |
| [Header](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/member/Header) | 返回一个 **[HeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeaderFooter/obj)** 对象，该对象代表显示于幻灯片顶部或者备注页、讲义或大纲的左上角的页眉。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/member/Parent) | 返回指定对象的父对象。 |
| [SlideNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/member/SlideNumber) | 返回一个 **[HeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeaderFooter/obj)** 对象，该对象代表位于幻灯片右下角的幻灯片编号，或者位于备注页、打印的讲义或大纲右下角的页码。只读。 |