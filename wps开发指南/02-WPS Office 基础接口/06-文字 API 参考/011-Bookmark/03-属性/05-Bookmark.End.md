# Bookmark.End

返回或设置书签中结束字符的位置。 **Long** 类型，可读写。



## 语法

express.**End**

express   一个代表 **Bookmark** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果本属性设置的值小于 **[Start](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmark/member/Start)** 属性的值，则 **Start** 属性将被设成同一值（即 **Start** 与 **End** 属性值相等）。

该属性返回结束字符相对于文档开头部分的位置。文档主要文字部分（wdMainTextStory）的起始字符位置为 0。通过设置该属性可以更改书签的大小。



## 示例


```JavaScript
/*此示例将“example_2”书签的结束位置与“example_1”书签的起始位置进行比较。*/
function test() {
    let bookmark1 = ActiveDocument.Bookmarks.Item("example_1")
    let bookmark2 = ActiveDocument.Bookmarks.Item("example_2")
    if (bookmark2.End > bookmark1.Start) {
        bookmark1.Select()
    }
}
```


```JavaScript
/*本示例设置所选内容中第二个书签的结束位置，并显示该书签的起始位置。*/
function test() {
    let bookmark = Selection.Bookmarks.Item(2)
    bookmark.End = 170
    alert(bookmark.Start)
}
```
