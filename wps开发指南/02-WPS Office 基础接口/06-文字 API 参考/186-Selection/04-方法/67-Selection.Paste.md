# Selection.Paste

将“剪贴板”的内容插入指定的选择范围处。



## 语法

express.**Paste()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


使用此方法替换当前选择范围的内容。如果您不希望替换所选范围的内容，请在使用此方法之前使用 [ **Collapse** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Collapse) 方法。

如果您将此方法与 [ **Range** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj) 对象一起使用，该范围将扩展以包含“剪贴板”中的内容。如果您使用 **Selection** 对象的此方法，所选内容不会扩展以包含“剪贴板”中的内容；相反，所选内容将放置到粘贴的“剪贴板”内容之后。



## 示例


```JavaScript
/*本示例复制文档中的第一段并将其粘贴到插入点。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Range.Copy()
    Selection.Collapse(wdCollapseStart)
    Selection.Paste()
}
```


```JavaScript
/*本示例复制第一个文档中的第二段并将其粘贴到文档的末尾。*/
function test() {
    Documents.Item(1).Paragraphs.Item(2).Range.Copy()
    Selection.EndKey(wdStory)
    Selection.Paste()
}
```
