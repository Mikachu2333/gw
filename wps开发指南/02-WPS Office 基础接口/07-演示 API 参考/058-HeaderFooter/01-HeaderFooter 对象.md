# HeaderFooter 对象

代表幻灯片或母版上的页眉、页脚、日期和时间、幻灯片编号或页码。幻灯片或母版的所有 **HeaderFooter** 对象都包含在 **[HeadersFooters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/obj)** 对象中。

## 说明


使用下表中列出的属性之一返回 **HeaderFooter** 对象。

| 使用此属性       | 返回                                            |
| ----------- | --------------------------------------------- |
| **[DateAndTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/member/DateAndTime)** | 代表幻灯片的日期和时间的 **HeaderFooter** 对象。                 |
| **[Footer](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/member/Footer)**      | 代表幻灯片页脚的 **HeaderFooter** 对象。                     |
| **[Header](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/member/Header)**      | 代表幻灯片页眉的 **HeaderFooter** 对象。仅对备注页和讲义有效，不用于幻灯片。   |
| **[SlideNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/member/SlideNumber)** | 代表幻灯片编号（在幻灯片中）或页码（在备注页或讲义中）的 **HeaderFooter** 对象。 |

 **HeaderFooter** 对象不适用于表示笔记页面的 **Slide** 对象。表示页眉的 **HeaderFooter** 对象仅适用于备注母版或讲义母版。

您可以设置单个幻灯片的 **HeaderFooter** 对象的属性。


## 示例


```JavaScript
/*本示例设置活动演示文稿第一张幻灯片的页脚文本。*/
function test() {
    let headerFooter = ActivePresentation.Slides.Item(1).HeadersFooters.Footer
    headerFooter.Text = "Volcano Coffee"
}
```
您还可以为幻灯片母版、标题母版、笔记母版或讲义母版设置 **HeaderFooter** 对象的属性，以同时影响所有幻灯片、标题幻灯片、笔记页面或讲义和大纲。



```JavaScript
/*本示例设置并显示活动演示文稿幻灯片母版的页脚文本、日期和时间、幻灯片编号。这些设置将应用到所有基于该母版的幻灯片（显示母版背景对象并且没有单独设置其页脚以及日期和时间的幻灯片）。*/
function test() {
    let headerFooters = ActivePresentation.SlideMaster.HeadersFooters
    headerFooters.Footer.Visible = msoTrue
    headerFooters.Footer.Text = "Regional Sales"
    headerFooters.SlideNumber.Visible = msoTrue
    headerFooters.DateAndTime.Visible = msoTrue
    headerFooters.DateAndTime.UseFormat = msoTrue
    headerFooters.DateAndTime.Format = ppDateTimeMdyy
}
```
要清除为幻灯片单独设置的页眉和页脚信息，并保证所有幻灯片显示幻灯片母版中定义的页眉和页脚信息，请在运行前面的示例前运行以下代码：



```JavaScript
/*本示例清除为幻灯片单独设置的页眉和页脚信息，并保证所有幻灯片显示幻灯片母版中定义的页眉和页脚信息。*/
function test() {
    let slides = ActivePresentation.Slides
    for (let i = 1; i <= slides.Count; i++) {
        slides.Item(i).DisplayMasterShapes = msoTrue
        slides.Item(i).HeadersFooters.Clear()
    }
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeaderFooter/member/Application) | 返回一个 **Application** 对象，该对象表示指定对象的创建者。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeaderFooter/member/Format) | 返回或设置自动更新的日期和时间的格式。可读/写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeaderFooter/member/Parent) | 返回指定对象的父对象。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeaderFooter/member/Text) | 返回或设置一个 **String** 类型值，该值代表指定对象中包含的文本。可读/写。 |
| [UseFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeaderFooter/member/UseFormat) | 决定日期和时间对象是否包含自动更新的信息。可读/写。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeaderFooter/member/Visible) | 返回或设置指定对象或应用于指定对象的格式的可见性。可读/写。 |