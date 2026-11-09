# SlideRange.HeadersFooters

返回一个 **[HeadersFooters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/obj)** 集合，该集合代表与幻灯片、幻灯片母版或幻灯片区域相关联的页眉、页脚、日期和时间以及幻灯片编号。只读。



## 语法

express.**HeadersFooters**

express   一个代表 **SlideRange** 对象的变量。

## 类型

HeadersFooters

## 示例


```JavaScript
/*本示例设置活动演示文稿中的页脚文本、日期和时间的格式，并将日期和时间设定为可自动更新。*/
function test() {
    let headersFooters = ActivePresentation.Slides.Range(1).HeadersFooters
    headersFooters.Footer.Text = "Regional Sales"
    headersFooters.DateAndTime.UseFormat = msoTrue
    headersFooters.DateAndTime.Format = ppDateTimeHmmss
}
```


```JavaScript
/*本示例清除选定的幻灯片中单独设置的页眉和页脚信息。*/
function test() {
    let slideRange = ActivePresentation.Windows.Item(1).Selection.SlideRange
    slideRange.HeadersFooters.Clear()
}
```
