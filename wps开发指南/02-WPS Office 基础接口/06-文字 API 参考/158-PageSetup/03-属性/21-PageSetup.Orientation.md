# PageSetup.Orientation

返回或设置页面的方向。可读写 **[WdOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdOrientation)** 类型。



## 语法

express.**Orientation**

express   一个代表 **PageSetup** 对象的变量。

## 类型

WdOrientation

## 说明


根据您所选择或安装的语言支持（例如，美国英语），某些 **WdOrientation** 常量可能不可用。



## 示例


```JavaScript
/*本示例先改变文档“Document1.docx”的方向，再打印该文档。然后本示例将文档的方向恢复为纵向。*/
function test() {
    let document = Documents.Item("Document1.docx")
    document.PageSetup.Orientation = wdOrientLandscape
    document.PrintOut()
    document.PageSetup.Orientation = wdOrientPortrait
}
```


```JavaScript
/*本示例显示活动文档第一节页面的方向。*/
function test() {
    switch (ActiveDocument.Sections.Item(1).PageSetup.Orientation) {
        case wdOrientLandscape:
            alert("横向")
            break
        case wdOrientPortrait:
            alert("纵向")
            break
    }
}
```
