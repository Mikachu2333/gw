# Bookmark.Range

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表指定对象所含的部分文档。



## 语法

express.**Range**

express   一个代表 **Bookmark** 对象的变量。

## 类型

Range

## 说明


有关从文档返回一个区域或从图形集合返回图形区域的信息，请参阅 **Range** 方法。



## 示例


```JavaScript
/*本示例使用黄色突出显示活动文档中的所有书签。*/
function test() {
    let bookmarks = ActiveDocument.Bookmarks
    for (let i = 1; i <= bookmarks.Count; i++) {
        bookmarks.Item(i).Range.HighlightColorIndex = wdYellow
    }
}
```


```JavaScript
/*本示例显示所选内容中第三个书签的文档部分的文本。*/
function test() {
    let bookmark = Selection.Bookmarks.Item(3)
    alert(bookmark.Range.Text)
}
```
