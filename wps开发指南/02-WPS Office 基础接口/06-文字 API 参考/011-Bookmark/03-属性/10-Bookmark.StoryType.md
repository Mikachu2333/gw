# Bookmark.StoryType

返回指定范围、选定内容或书签的文字类型。 **WdStoryType** 类型，只读。



## 语法

express.**StoryType**

express   一个代表 **Bookmark** 对象的变量。

## 类型

WdStoryType

## 示例


```JavaScript
/*如果活动文档的主体部分包括名为“temp”的书签，本示例将选中该书签。*/
function test() {
    if (ActiveDocument.Bookmarks.Exists("temp")) {
        let bookmark = ActiveDocument.Bookmarks.Item("temp")
        if (bookmark.StoryType == wdMainTextStory) {
            bookmark.Select()
        }
    }
}
```


```JavaScript
/*本示例显示“temp”的书签文字类型是否为 wdMainTextStory。*/
function test() {
    let bookmark = ActiveDocument.Bookmarks.Item('temp')
    alert(bookmark.StoryType == wdMainTextStory)
}
```
