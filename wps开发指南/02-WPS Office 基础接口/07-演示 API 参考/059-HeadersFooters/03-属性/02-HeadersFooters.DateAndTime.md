# HeadersFooters.DateAndTime

返回一个代表日期和时间项的 **[HeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeaderFooter/obj)** 对象，该项将显示在幻灯片的左下角，或者备注页、讲义或大纲的右上角。只读。



## 语法

express.**DateAndTime**

express   一个代表 **HeadersFooters** 对象的变量。

## 类型

HeaderFooter

## 示例


```JavaScript
/*本示例为活动演示文稿的母版幻灯片设置日期和时间格式。该设定将对所有基于该幻灯片母版的幻灯片有效。*/
function test() {
    let headerFooter = Application.ActivePresentation.SlideMaster.HeadersFooters.DateAndTime
    headerFooter.Format = ppDateTimeMdyy
    headerFooter.UseFormat = msoTrue
}
```


```JavaScript
/*本示例隐藏活动演示文稿第一张幻灯片的日期和时间。*/
function test() {
    let headerFooter = ActivePresentation.Slides.Item(1).HeadersFooters.DateAndTime
    headerFooter.Visible = msoFalse
}
```
