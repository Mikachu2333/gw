# Document.Bookmarks

返回一个 **[Bookmarks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmarks/obj)** 集合，该集合代表文档中的所有书签。只读。



## 语法

express.**Bookmarks**

express   一个代表 **Document** 对象的变量。

## 类型

Bookmarks

## 示例


```JavaScript
/*本示例将检索活动文档中第一个书签的首字符和尾字符的位置，并通知用户。*/
function test() {
    let bookmark = ActiveDocument.Bookmarks.Item(1)
    let bookStart = bookmark.Start
    let bookEnd = bookmark.End
    alert(`start: ${bookStart} end: ${bookEnd}`)
}
```


```JavaScript
/*本示例使用 arr 数组存储活动文档包含的所有书签的名称。*/
function test() {
    let bookmarks = ActiveDocument.Bookmarks
    if (bookmarks.Count >= 1) {
        let arr = []
        for (let i = 1; i <= bookmarks.Count; i++) {
            arr.push(bookmarks.Item(i).Name)
        }
    }
}
```
