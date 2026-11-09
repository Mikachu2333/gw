# Range.TextRetrievalMode

返回一个 **[TextRetrievalMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextRetrievalMode/obj)** 对象，该对象控制从指定 **Range** 检索文字的方式。可读写。



## 语法

express.**TextRetrievalMode**

express   一个代表 **Range** 对象的变量。

## 类型

TextRetrievalMode

## 示例


```JavaScript
/*本示例检索选定文字（排除隐藏文字），并将其插入活动文档第三段的开始处。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        let range1 = Selection.Range
        range1.TextRetrievalMode.IncludeHiddenText = false
        let range2 = ActiveDocument.Paragraphs.Item(2).Range
        range2.InsertAfter(range1.Text)
    }
}
```


```JavaScript
/*本示例在大纲视图中检索并显示前三个段落。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    let range = ActiveDocument.Range(paragraphs.Item(1).Range.Start, paragraphs.Item(3).Range.End)
    range.TextRetrievalMode.ViewType = wdOutlineView
    alert(range.Text)
}
```


```JavaScript
/*本示例先排除引用选定文字的区域中的域代码和隐藏文字，然后在一个消息框中显示文字。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        let range = Selection.Range
        range.TextRetrievalMode.IncludeFieldCodes = false
        range.TextRetrievalMode.IncludeHiddenText = false
        alert(range.Text)
    }
}
```
