# Selection.InsertParagraph

用新段落替换指定的所选内容。



## 语法

express.**InsertParagraph()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


使用此方法后，所选内容将包含新段落。如果您不希望替换当前所选内容，请在使用此方法之前使用 **Collapse** 方法。您还可以使用 **[InsertParagraphBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertParagraphBefore)** 或 **[InsertParagraphAfter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertParagraphAfter)** 方法在所选内容之前或之后插入新段落。



## 示例


```JavaScript
/*本示例折叠所选内容，然后在插入点插入段落标记。*/
function test() {
    Selection.Collapse(wdCollapseStart)
    Selection.InsertParagraph()
}
```


```JavaScript
/*本示例在活动文档第一个段落的结束位置插入一个段落，并设置插入点的文本。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Range.Select()
    Selection.Collapse(wdCollapseEnd)
    Selection.InsertParagraph()
    Selection.Range.Text = "这是一个新段落。"
}
```
