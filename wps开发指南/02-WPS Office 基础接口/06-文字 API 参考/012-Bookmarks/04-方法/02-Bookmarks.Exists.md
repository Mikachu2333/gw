# Bookmarks.Exists

判断指定书签是否存在。如果存在指定的书签，则返回 **True** 。



## 语法

express.**Exists(Name)**

express   一个代表 **Bookmarks** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 书签名。书签名不能包含超过40个字符或多个单词。 |

## 返回值

boolean

## 示例


```JavaScript
/*本示例判断活动文档中是否存在名为“example_1”的书签，如果存在，则将其删除。*/
function test() {
    let bookmarks = Application.ActiveDocument.Bookmarks
    if (bookmarks.Exists("example_1")) {
        bookmarks.Item("example_1").Delete()
    }
}
```


```JavaScript
/*本示例显示第一个文档中是否存在名为“example_2”的书签。*/
function test() {
    alert(Documents.Item(1).Bookmarks.Exists("example_2"))
}
```
