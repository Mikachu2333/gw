# Bookmarks.Count

返回 **Bookmarks** 集合中的项目数。 **Long** 类型，只读。



## 语法

express.**Count**

express   一个代表 **Bookmarks** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档的书签的数量。*/
function test() {
    alert("书签的数量： " + Application.ActiveDocument.Bookmarks.Count)
}
```
