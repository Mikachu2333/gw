# Break.Range

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表指定对象所含的部分文档。



## 语法

express.**Range**

express   一个代表 **Break** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例向活动文档上活动窗口的第一个窗格的第一页的第一个分隔符后插入“hello WPS”。*/
function test() {
    let range = Application.ActiveDocument.ActiveWindow.Panes.Item(1).Pages.Item(1).Breaks.Item(1).Range
    range.InsertAfter("hello WPS")
}
```


```JavaScript
/*本示例向活动窗口的第一个窗格的第一页中的第二个分隔符后插入一个新的段落。*/
function test() {
    let range = Application.ActiveWindow.Panes.Item(1).Pages.Item(1).Breaks.Item(2).Range
    range.InsertParagraphAfter()
}
```
