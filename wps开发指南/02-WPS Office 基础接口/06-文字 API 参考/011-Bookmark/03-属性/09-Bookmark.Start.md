# Bookmark.Start

返回或设置书签起始字符的位置。 **Long** 类型，可读写。



## 语法

express.**Start**

express   一个代表 **Bookmark** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果将该属性的值设置为大于 **[End](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmark/member/End)** 属性值，则 **End** 属性值会设置为与 **Start** 属性值相同。

书签对象包括起始字符和结束字符位置。起始字符位置距文档开头部分最近。

该属性返回起始字符相对于文档开头部分的位置。文字部分（ **wdMainTextStory** ）的起始字符位置为 0。通过设置本属性可以更改书签的大小。



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
/*本示例设置所选内容中名为“example_2”的书签的起始位置，并显示该书签的结束位置。*/
function test() {
    let bookmark = Selection.Bookmarks.Item("example_2")
    bookmark.Start = 172
    alert(bookmark.End)
}
```
