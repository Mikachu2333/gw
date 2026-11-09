# Bookmark.Empty

如果指定书签为空，则该属性值为 **True** 。只读 **Boolean** 类型。



## 语法

express.**Empty**

express   一个代表 **Bookmark** 对象的变量。

## 类型

boolean

## 说明


空书签可标记位置（折叠选定内容），而不标记任何文本。如果指定书签不存在，则会出错。可用 **Exists** 属性确定该书签是否存在。



## 示例


```JavaScript
/*本示例判断如果活动文档上存在名为“example_1”的书签且该书签为空，则通知用户。*/
function test() {
    let bookmarks = Application.ActiveDocument.Bookmarks
    if (bookmarks.Exists("example_1") && bookmarks.Item("example_1").Empty) {
        alert("The example_1 bookmark is empty")
    }
}
```


```JavaScript
/*本示例遍历活动文档上所有书签，判断如果书签为空，则通知用户。*/
function test() {
    let bookmarks = Application.ActiveDocument.Bookmarks
    for (let i = 1; i <= bookmarks.Count; i++) {
        if (bookmarks.Item(i).Empty) {
            alert(`第${i}个书签为空`)
        }
    }
}
```
