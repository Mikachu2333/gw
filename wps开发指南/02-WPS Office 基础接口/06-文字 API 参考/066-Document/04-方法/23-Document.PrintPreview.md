# Document.PrintPreview

将视图切换到打印预览。



## 语法

express.**PrintPreview()**

express   一个代表 **Document** 对象的变量。

## 返回值

void

## 说明


除了使用 **PrintPreview** 方法外，还可以将 **[PrintPreview](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/PrintPreview)** 属性设置为 **True** 或 **False** ，前者切换到打印预览，后者从打印预览切回。还可以通过将 **View** 对象的 **[Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/View/member/Type)** 属性设置为 **[wdPrintPreview](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdViewType)** 来更改视图。



## 示例


```JavaScript
/*如果活动文档当前处于其他视图中，本示例将其切换到打印预览。*/
function test() {
    if (!Application.PrintPreview) {
        ActiveDocument.PrintPreview()
    }
}
```


```JavaScript
/*本示例判断如果活动窗口不为打印预览视图，则将视图切换到打印预览。*/
function test() {
    if (ActiveWindow.View.Type !== wdPrintPreview) {
        ActiveDocument.PrintPreview()
    }
}
```
