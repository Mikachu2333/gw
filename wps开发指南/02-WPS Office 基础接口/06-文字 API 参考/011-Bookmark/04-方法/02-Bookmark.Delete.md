# Bookmark.Delete

删除指定的书签。



## 语法

express.**Delete()**

express   一个代表 **Bookmark** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例判断如果活动文档中存在名为“example_3”的书签，则删除该书签。*/
function test() {
    let bookmark = "example_3"
    let response = MsgBox(`Are you sure you want to delete the bookmark named " ${bookmark} "?`, jsYesNo)
    let bookmarks = ActiveDocument.Bookmarks
    if (response == jsResultYes && bookmarks.Exists(bookmark)) {
        bookmarks.Item(bookmark).Delete()
    }
}
```


```JavaScript
/*本示例删除所选内容中第一个书签。*/
function test() {
    let bookmark = Selection.Bookmarks.Item(1)
    bookmark.Delete()
}
```
