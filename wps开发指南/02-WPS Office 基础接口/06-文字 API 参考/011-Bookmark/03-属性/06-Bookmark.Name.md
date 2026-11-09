# Bookmark.Name

返回指定对象的名称。 **String** 类型，只读。



## 语法

express.**Name**

express   一个代表 **Bookmark** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档上第一个书签的名称。*/
function test() {
    let bookmark = ActiveDocument.Bookmarks.Item(1)
    alert(bookmark.Name)
}
```


```JavaScript
/*本示例显示所选内容中所有书签的名称。*/
function test() {
    let bookmarks = Selection.Bookmarks
    let str = ""
    for (let i = 1; i <= bookmarks.Count; i++) {
        str += bookmarks.Item(i).Name + "\n"
    }
    alert(str)
}
```
