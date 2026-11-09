# View.SeekView

返回或设置在页面视图中显示的文档元素。 **[WdSeekView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdSeekView)** 类型，可读写。



## 语法

express.**SeekView**

express   一个代表 **View** 对象的变量。

## 类型

WdSeekView

## 说明


如果当前视图不是页面视图，该属性将产生一个错误。



## 示例


```JavaScript
/*如果活动文档有脚注，则本示例在页面视图中显示它。*/
function test() {
    if (ActiveDocument.Footnotes.Count >= 1) {
        let view = ActiveDocument.ActiveWindow.View
        view.Type = wdPrintView
        view.SeekView = wdSeekFootnotes
    }
}
```


```JavaScript
/*本示例显示当前节中第一页的页脚。*/
function test() {
    ActiveDocument.PageSetup.DifferentFirstPageHeaderFooter = true
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdPrintView
    view.SeekView = wdSeekFirstPageFooter
}
```


```JavaScript
/*如果在页面视图中选定脚注或尾注区域，本示例可切换到主控文档。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    if (view.SeekView == wdSeekFootnotes || view.SeekView == wdSeekEndnotes) {
        view.SeekView = wdSeekMainDocument
    }
}
```
