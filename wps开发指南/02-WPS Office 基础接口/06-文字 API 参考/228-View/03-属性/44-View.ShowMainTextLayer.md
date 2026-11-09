# View.ShowMainTextLayer

如果在显示页眉和页脚区域时同时显示指定文档的文字，则该属性值为 **True** 。该属性等效于 **“页眉和页脚”** 工具栏上的 **“显示/隐藏文档文字”** 按钮。 **Boolean** 类型，可读写。



## 语法

express.**ShowMainTextLayer**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在活动窗口显示文档页眉并隐藏文档正文。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdPrintView
    view.SeekView = wdSeekCurrentPageHeader
    view.ShowMainTextLayer = false
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格的页眉和页脚和文档正文是否同时展示。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.ShowMainTextLayer)
}
```
