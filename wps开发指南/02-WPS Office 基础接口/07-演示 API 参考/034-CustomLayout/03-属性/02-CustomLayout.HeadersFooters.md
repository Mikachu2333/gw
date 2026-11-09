# CustomLayout.HeadersFooters

返回一个 **[HeadersFooters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/HeadersFooters/obj)** 集合，该集合代表与指定的自定义版式关联的页眉、页脚、日期和时间以及幻灯片编号。



## 语法

express.**HeadersFooters**

express   一个代表 **CustomLayout** 对象的变量。

## 类型

HeadersFooters

## 示例


```JavaScript
/*本示例显示活动演示文稿的幻灯片母版的最后一个自定义版式的关联的日期和时间。*/
function test() {
    let customLayouts = ActivePresentation.SlideMaster.CustomLayouts
    let headersFooters = customLayouts.Item(customLayouts.Count).HeadersFooters
    alert(headersFooters.DateAndTime.Text)
}
```


```JavaScript
/*本示例显示活动窗口所选的第一张幻灯片的自定义版式关联的页脚是否可见。*/
function test() {
    let customLayout = ActiveWindow.Selection.SlideRange.Item(1).CustomLayout
    let headerFooter = customLayout.HeadersFooters.Footer
    alert(headerFooter.Visible === msoTrue)
}
```
