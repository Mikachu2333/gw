# Bookmarks.Item

返回集合中的单个 **[Bookmark](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmark/obj)** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Bookmarks** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表序号位置的 **Long** 类型值，或代表单个对象名称的 **String** 类型值。 |

## 返回值

Bookmark

## 示例


```JavaScript
/*本示例判断活动文档中是否存在名为“example_2”的书签，如果存在，则将其选中。*/
function test() {
    let bookmarks = Application.ActiveDocument.Bookmarks
    if (bookmarks.Exists("example_2")) {
        bookmarks.Item("example_2").Select()
    }
}
```


```JavaScript
/*本示例显示第一个文档上第三个书签的文字部分的类型是否为wdMainTextStory。*/
function test() {
    alert(Documents.Item(1).Bookmarks.Item(3).StoryType == wdMainTextStory)
}
```
