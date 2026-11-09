# HeadersFooters.SlideNumber

返回一个 **[HeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeaderFooter/obj)** 对象，该对象代表位于幻灯片右下角的幻灯片编号，或者位于备注页、打印的讲义或大纲右下角的页码。只读。



## 语法

express.**SlideNumber**

express   一个代表 **HeadersFooters** 对象的变量。

## 类型

HeaderFooter

## 示例


```JavaScript
/*本示例隐藏当前演示文稿第一张幻灯片的幻灯片编号（如果该编号当前为可见），或显示该幻灯片编号（如果该编号当前为隐藏）。*/
function test() {
    let headerFooter = Application.ActivePresentation.Slides.Item(1).HeadersFooters.SlideNumber
    if (headerFooter.Visible == msoTrue) {
        headerFooter.Visible = msoFalse
    } else {
        headerFooter.Visible = msoTrue
    }
}
```


```JavaScript
/*本示例显示活动窗口所选的第一张幻灯片是否展示幻灯片编号。*/
function test() {
    let headersFooters = ActiveWindow.Selection.SlideRange.Item(1).HeadersFooters
    alert(headersFooters.SlideNumber.Visible == msoTrue)
}
```
