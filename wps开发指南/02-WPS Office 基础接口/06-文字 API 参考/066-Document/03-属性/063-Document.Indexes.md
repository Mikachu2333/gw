# Document.Indexes

返回一个 **[Indexes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Indexes/obj)** 集合，该集合代表指定文档的所有索引。只读。



## 语法

express.**Indexes**

express   一个代表 **Document** 对象的变量。

## 类型

Indexes

## 示例


```JavaScript
/*本示例在活动文档的末尾添加索引。*/
function test() {
    let range = ActiveDocument.Range(ActiveDocument.Content.End - 1, ActiveDocument.Content.End - 1)
    ActiveDocument.Indexes.Add(range, false, null, null, 1)
}
```


```JavaScript
/*本示例插入关于选定文本的索引项。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        ActiveDocument.Indexes.MarkEntry(Selection.Range, Selection.Range.Text)
    }
}
```
