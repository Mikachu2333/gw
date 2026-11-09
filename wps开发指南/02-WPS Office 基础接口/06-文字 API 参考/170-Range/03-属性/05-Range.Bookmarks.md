# Range.Bookmarks

返回一个 **[Bookmarks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmarks/obj)** 集合。该集合代表某一文档、区域或选定内容中的所有书签。只读。



## 语法

express.**Bookmarks**

express   一个代表 **Range** 对象的变量。

## 类型

Bookmarks

## 示例


```JavaScript
/*本示例判断如果所选内容中存在名为“example_1”的书签，则将其删除。*/
function test() {
    let bookmarks = Selection.Range.Bookmarks
    if (bookmarks.Exists("example_1")) {
        bookmarks.Item("example_1").Delete()
    }
}
```


```JavaScript
/*本示例显示活动文档的主文档文章中所有书签的名称。*/
function test() {
    let str = ''
    let range = ActiveDocument.Content
    for (let i = 1; i <= range.Bookmarks.Count; i++) {
        str += range.Bookmarks.Item(i).Name + '\n'
    }
    alert(str)
}
```
