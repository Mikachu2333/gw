# Selection.PreviousBookmarkID

返回位于指定的所选内容或区域中或之前的最后一个书签的编号。如果没有相应的书签，则返回 0（零）。 **Long** 类型，只读。



## 语法

express.**PreviousBookmarkID**

express   一个代表 **Selection** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例选定活动文档的前一个书签。*/
function test() {
    let num = Selection.PreviousBookmarkID
    if (num != 0) {
        ActiveDocument.Content.Bookmarks.Item(num).Select()
    }
}
```


```JavaScript
/*本示例显示所选区域中的最后一个书签的编号。*/
function test() {
    alert(Selection.PreviousBookmarkID)
}
```
