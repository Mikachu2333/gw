# Bookmarks.DefaultSorting

返回或设置 **“插入”** 菜单上 **“书签”** 对话框中显示的书签名的排序依据选项。 **WdBookmarkSortBy** 类型，可读写。



## 语法

express.**DefaultSorting**

express   一个代表 **Bookmarks** 对象的变量。

## 类型

WdBookmarkSortBy

## 说明


该属性不影响 **Bookmark** 对象在 **Bookmarks** 集合中的顺序。



## 示例


```JavaScript
/*本示例按位置对书签进行排序，然后显示“书签”对话框。*/
function test() {
    Application.ActiveDocument.Bookmarks.DefaultSorting = wdSortByLocation
    Dialogs.Item(wdDialogInsertBookmark).Show()
}
```


```JavaScript
/*本示例显示第一个文档上“书签”对话框中的书签名称排序方式是否为wdSortByName。*/
function test() {
    alert(Documents.Item(1).Bookmarks.DefaultSorting == wdSortByName)
}
```
