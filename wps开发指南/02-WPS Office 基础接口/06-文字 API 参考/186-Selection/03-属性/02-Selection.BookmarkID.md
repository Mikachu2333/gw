# Selection.BookmarkID

返回位于选定内容开始位置的书签编号。 **Long** 类型，只读。



## 语法

express.**BookmarkID**

express   一个代表 **Selection** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果没有相应的书签，则返回 0（零）。编号对应于书签在文档中的位置，1 对应于第一个书签，2 对应于第二个书签，依此类推。



## 示例


```JavaScript
/*本示例显示位于选定内容的开始位置的书签编号。*/
function test() {
    alert(`Bookmark ${Selection.BookmarkID}`)
}
```


```JavaScript
/*本示例在选定内容添加新的书签，并显示位于选定内容开始位置的书签编号。*/
function test() {
    ActiveDocument.Bookmarks.Add("新书签", Selection.Range)
    alert(ActiveWindow.Selection.BookmarkID)
}
```
