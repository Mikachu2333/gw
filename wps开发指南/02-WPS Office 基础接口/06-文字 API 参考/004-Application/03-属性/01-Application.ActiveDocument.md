# Application.ActiveDocument

返回一个 **[Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/obj)** 对象，该对象代表活动文档。如果没有打开的文档，就会导致出错。只读。



## 语法

express.**ActiveDocument**

express   一个代表 **Application** 对象的变量。

## 类型

Document

## 说明


无法使用此属性访问活动“受保护的视图”窗口中的文档。相反，使用 **ProtectedViewWindow** 对象的 **[Document](#TODO)** 属性。



## 示例


```JavaScript
/*本示例显示活动文档的名称，如果没有打开的文档，则显示一条消息。*/
function test() {
    if (Application.Documents.Count >= 1) {
        alert(ActiveDocument.Name)
    } else {
        alert("No documents are open")
    }
}
```


```JavaScript
/*本示例将选定内容折叠为插入点，然后创建一个区域，包括选定内容的后面五个字符，然后显示该内容。*/
function test() {
    Application.Selection.Collapse(wdCollapseStart)
    let range = Application.ActiveDocument.Range(Application.Selection.Start, Application.Selection.Start + 5)
    alert(range.Text)
}
```


```JavaScript
/*本示例在活动文档的开头插入文本，然后打印该文档*/
function test() {
    let range = ActiveDocument.Range(0, 0)
    range.InsertBefore("Company Report")
    range.Font.Name = "Arial"
    range.Font.Size = 24
    range.InsertParagraphAfter()
    ActiveDocument.PrintOut()
}
```
