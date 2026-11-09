# HeadersFooters.Footer

返回一个 **[HeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeaderFooter/obj)** 对象，该对象代表显示于幻灯片底部或者备注页、讲义或大纲的左下角的页脚。只读。



## 语法

express.**Footer**

express   一个代表 **HeadersFooters** 对象的变量。

## 类型

HeaderFooter

## 示例


```JavaScript
/*本示例为当前演示文稿的幻灯片母版设置脚注的文本，并设定在标题幻灯片上显示脚注、日期和时间及幻灯片编号。*/
function test() {
    let headerFooter = Application.ActivePresentation.SlideMaster.HeadersFooters
    headerFooter.Footer.Text = "Introduction"
    headerFooter.DisplayOnTitleSlide = true
}
```


```JavaScript
/*本示例隐藏活动演示文稿第一张幻灯片的页脚。*/
function test() {
    let headersFooters = ActivePresentation.Slides.Item(1).HeadersFooters
    headersFooters.Footer.Visible = msoFalse
}
```
