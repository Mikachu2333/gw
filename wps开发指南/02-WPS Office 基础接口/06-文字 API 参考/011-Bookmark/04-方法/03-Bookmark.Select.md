# Bookmark.Select

选择指定书签。



## 语法

express.**Select()**

express   一个代表 **Bookmark** 对象的变量。

## 返回值

void

## 说明


使用该方法后，可用 **Selection** 对象来处理选定项目。有关详细信息，请参阅处理 **Selection** 对象。



## 示例


```JavaScript
/*本示例选中活动文档中的第二个书签，并为所选内容应用加粗格式。*/
function test() {
    ActiveDocument.Bookmarks.Item(2).Select()
    Selection.Font.Bold = true
}
```


```JavaScript
/*本示例选中第一个文档中名为“example_1”的书签，并将所选内容替换为名为“example_2”的书签的文档部分的文本。*/
function test() {
    let bookmarks = Documents.Item(1).Bookmarks
    bookmarks.Item("example_1").Select()
    Selection.Range.Text = bookmarks.Item("example_2").Range.Text
}
```
