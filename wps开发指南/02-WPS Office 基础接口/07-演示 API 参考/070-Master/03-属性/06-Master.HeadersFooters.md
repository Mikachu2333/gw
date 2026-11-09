# Master.HeadersFooters

返回一个 **[HeadersFooters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/obj)** 集合，该集合代表与幻灯片、幻灯片母版或幻灯片区域相关联的页眉、页脚、日期和时间以及幻灯片编号。只读。



## 语法

express.**HeadersFooters**

express   一个代表 **Master** 对象的变量。

## 类型

HeadersFooters

## 示例


```JavaScript
/*本示例在当前演示文稿的备注母版中设置页脚文本、日期和时间的格式，并将日期和时间设定为可自动修改。*/
function test() {
    let headersFooters = ActivePresentation.NotesMaster.HeadersFooters
    headersFooters.Footer.Text = "Regional Sales"
    let headersFooter = headersFooters.DateAndTime
    headersFooter.UseFormat = msoTrue
    headersFooter.Format = ppDateTimeHmmss
}
```


```JavaScript
/*本示例为第一篇演示文稿的幻灯片母版设置脚注的文本，并设定在标题幻灯片上显示脚注、日期和时间及幻灯片编号。*/
function test() {
    let headersFooters = Presentations.Item(1).SlideMaster.HeadersFooters
    headersFooters.Footer.Text = "Introduction"
    headersFooters.DisplayOnTitleSlide = msoTrue
}
```
