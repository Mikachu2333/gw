# Range.BookmarkID

返回位于指定区域开始位置的书签编号。如果没有相应的书签，则返回 0（零）。 **Long** 类型，只读。



## 语法

express.**BookmarkID**

express   一个代表 **Range** 对象的变量。

## 类型

number（int4 精度）

## 说明


编号或书签对应于书签在文档中的位置：1 对应于第一个书签，2 对应于第二个，以此类推。



## 示例


```JavaScript
/*如果文档的开始位置没有设置书签，则本示例添加一个名为“temp”的书签。*/
function test() {
    let range = ActiveDocument.Content
    range.Collapse(wdCollapseStart)
    if (range.BookmarkID == 0) {
        ActiveDocument.Bookmarks.Add("temp", range)
    }
}
```


```JavaScript
/*本示例显示所选内容开始位置的书签编号。*/
function test() {
    alert(Selection.Range.BookmarkID)
}
```
