# Bookmark.Column

如果指定的书签是表格的一列，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**Column**

express   一个代表 **Bookmark** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例创建一个带书签的表格，然后显示书签是否为表格的列。*/
function test() {
    let document = Documents.Add()
    let range = document.Tables.Add(Selection.Range, 3, 5).Cell(3, 5).Range
    range.InsertAfter("Cell(3,5)")
    document.Bookmarks.Add("BKMK_Cell35", range)
    alert(document.Bookmarks.Item(1).Column)
}
```


```JavaScript
/*本示例显示所选内容中第一个书签是否为表格的一列。*/
function test() {
    alert(Selection.Bookmarks.Item(1).Column)
}
```
