# View.ShowBookmarks

如果在每个书签的首尾显示方括号，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowBookmarks**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在所有窗口中的书签周围显示方括号。*/
function test() {
    for (let i = 1; i <= Windows.Count; i++) {
        Windows.Item(i).View.ShowBookmarks = true
    }
}
```


```JavaScript
/*本示例用书签标记选定内容，在活动文档的每个书签周围显示方括号，然后折叠选定内容。*/
function test() {
    ActiveDocument.Bookmarks.Add("temp", Selection.Range)
    ActiveDocument.ActiveWindow.View.ShowBookmarks = true
    Application.Selection.Collapse(wdCollapseStart)
}
```
