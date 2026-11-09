# View.Type

返回或设置视图的类型。可读/写 **[WdViewType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdViewType)** 类型。



## 语法

express.**Type**

express   一个代表 **View** 对象的变量。

## 类型

WdViewType

## 说明


 **Type** 属性为当前处于大纲视图或主控文档视图的所有文档返回 **[wdMasterView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdViewType)** 。除非预先在代码中明确设置，否则当前视图不会返回 **[wdOutlineView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdViewType)** 。

要检查当前文档是否为大纲视图，请使用 **Type** 属性和 **Subdocuments** 集合的 **Count** 属性。如果 **Type** 属性返回 **[wdOutlineView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdViewType)** 或 **[wdMasterView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdViewType)** ，并且 **Count** 属性返回0（零），则该文档为大纲视图。



## 示例


```JavaScript
/*本示例判断如果活动窗口为大纲视图（或主控文档视图）且活动文档的子文档数量为0，则通知用户。*/
function test() {
    let view = ActiveWindow.View
    if (view.Type == wdOutlineView || view.Type == wdMasterView) {
        if (ActiveDocument.Subdocuments.Count == 0) {
            alert("当前是大纲视图")
        }
    }
}
```


```JavaScript
/*本示例将活动文档的活动窗口切换为打印预览视图。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdPrintPreview
}
```
