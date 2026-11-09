# Bookmark.Copy

将书签复制到 **Name** 参数中指定的新书签处，并返回一个 **Bookmark** 对象。



## 语法

express.**Copy(Name)**

express   一个代表 **Bookmark** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 新书签的名称。 |

## 返回值

Bookmark

## 示例


```JavaScript
/*本示例将活动文档上第一个书签复制到名为“example_4”的新书签处。*/
function test() {
    let bookmark = ActiveDocument.Bookmarks.Item(1)
    bookmark.Copy("example_4")
}
```


```JavaScript
/*本示例将所选内容中名为“example_2”的书签复制到名为“example”的新书签处，并显示新书签的文档部分的文本。*/
function test() {
    let bookmark = Selection.Bookmarks.Item("example_2").Copy("example")
    alert(bookmark.Range.Text)
}
```
