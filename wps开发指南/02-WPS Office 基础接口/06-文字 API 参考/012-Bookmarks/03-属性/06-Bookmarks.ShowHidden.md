# Bookmarks.ShowHidden

如果 **Bookmarks** 集合中包括隐藏书签，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowHidden**

express   一个代表 **Bookmarks** 对象的变量。

## 类型

boolean

## 说明


 **ShowHidden** 属性还可控制是否在 **“插入”** 菜单的 **“书签”** 对话框中列出隐藏书签。在文档中插入交叉引用时，会自动插入隐藏书签。



## 示例


```JavaScript
/*本示例显示“书签”对话框，并展示隐藏书签和可见书签。*/
function test() {
    Application.ActiveDocument.Bookmarks.ShowHidden = true
    Application.Dialogs.Item(wdDialogInsertBookmark).Show()
}
```


```JavaScript
/*此示例显示文档中每个隐藏书签的名称。*/
function test() {
    let bookmarks = Application.ActiveDocument.Bookmarks
    bookmarks.ShowHidden = true
    for (let i = 1; i <= bookmarks.Count; i++) {
        if (bookmarks.Item(i).Name.startsWith("_")) {
            alert(bookmarks.Item(i).Name)
        }
    }
}
```
