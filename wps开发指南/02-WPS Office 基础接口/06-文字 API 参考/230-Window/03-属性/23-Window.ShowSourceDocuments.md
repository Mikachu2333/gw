# Window.ShowSourceDocuments

返回或设置一个 **[WdShowSourceDocuments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdShowSourceDocuments)** 常量，该常量代表 WPS 在比较和合并过程之后显示源文档的方式。可读写。



## 语法

express.**ShowSourceDocuments**

express   一个代表 **Window** 对象的变量。

## 类型

WdShowSourceDocuments

## 示例


```JavaScript
/*本示例同时显示原始文档和修订后的文档。*/
function test() {
    ActiveWindow.ShowSourceDocuments = wdShowSourceDocumentsBoth
}
```


```JavaScript
/*本示例判断比较函数比较两个文档时源文档的显示方式，并通知用户。*/
function test() {
    switch (ActiveWindow.ShowSourceDocuments) {
        case wdShowSourceDocumentsBoth:
            alert("同时显示原始文档和修订后的文档。")
            break
        case wdShowSourceDocumentsNone:
            alert("既不显示原始文档，也不显示修订后的文档。")
            break
        case wdShowSourceDocumentsOriginal:
            alert("只显示原始文档。")
            break
        case wdShowSourceDocumentsRevised:
            alert("只显示修订后的文档。")
            break
    }
}
```
