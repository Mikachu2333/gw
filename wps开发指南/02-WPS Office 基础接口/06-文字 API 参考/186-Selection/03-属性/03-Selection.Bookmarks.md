# Selection.Bookmarks

返回一个 **[Bookmarks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmarks/obj)** 集合。该集合代表某一文档、区域或选定内容中的所有书签。只读。



## 语法

express.**Bookmarks**

express   一个代表 **Selection** 对象的变量。

## 类型

Bookmarks

## 示例


```JavaScript
/*本示例将选定内容中第一个书签标记的文本区域的格式设置为加粗。*/
function test() {
    if (Selection.Bookmarks.Count >= 1) {
        Selection.Bookmarks.Item(1).Range.Bold = msoTrue
    }
}
```


```JavaScript
/*本示例向选定内容添加新的书签。*/
function test() {
    Selection.Bookmarks.Add("新书签", Selection.Range)
}
```
