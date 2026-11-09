# HeaderFooter.Format

返回或设置自动更新的日期和时间的格式。可读/写。



## 语法

express.**Format**

express   一个代表 **HeaderFooter** 对象的变量。

## 类型

PpDateTimeFormat

## 说明


仅适用于 **HeaderFooter** 对象，该对象代表时间和日期（由 **[DateAndTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/member/DateAndTime)** 属性从 **HeadersFooters** 集合中返回）。

通过将 **[UseFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeaderFooter/member/UseFormat)** 属性设置为 **msoTrue** ，确保将日期和时间设置为自动更新（不作为固定文本显示）。

 **Format** 属性的值可以是 **[PpDateTimeFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/enum/PpDateTimeFormat)** 常量之一。



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
/*本示例判断如果活动窗口所选的第一张幻灯片自动更新日期和时间，则显示该幻灯片自动更新的日期和时间的格式是否为 ppDateTimeMdyy。*/
function test() {
    let headerFooter = ActiveWindow.Selection.SlideRange.Item(1).HeadersFooters.DateAndTime
    if (headerFooter.UseFormat == msoTrue) {
        alert(headerFooter.Format == ppDateTimeMdyy)
    }
}
```
