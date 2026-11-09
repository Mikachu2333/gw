# Bookmarks 对象

 **[Bookmark](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmark/obj)** 对象的集合，该集合代表指定选定内容、区域或文档中的书签。

## 说明


使用 **Bookmarks** 属性返回文档、范围或所选内容的 **Bookmarks** 集合。


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
使用 **Add** 方法为文档中的某个范围设置书签。



```JavaScript
/*本示例为活动文档中的所选区域添加名为“temp”的书签。*/
function test() {
    Application.ActiveDocument.Bookmarks.Add("temp", Selection.Range)
}
```
使用 **Bookmarks** (_index_)（其中 _index_ 是书签名称或索引号）返回单个 **Bookmark** 对象。您必须与书签名称的拼写（但不一定是大小写）完全匹配。



```JavaScript
/*本示例选中活动文档上名为“temp”的书签。*/
function test() {
    ActiveDocument.Bookmarks.Item("temp").Select()
}
```
索引号表示书签在 **Selection** 或 **Range** 对象中的位置。对于 **Document** 对象，索引号表示书签在“书签”对话框中按字母顺序排列的书签列表中的位置（单击“名称”可按字母顺序对书签列表进行排序）。



```JavaScript
/*本示例显示活动文档上第二个书签的名称。*/
function test() {
    alert(ActiveDocument.Bookmarks.Item(2).Name)
}
```
 **ShowHidden** 属性会影响 **Bookmarks** 集合中的元素数。如果 **ShowHidden** 为 **True** ，则隐藏的书签将包含在 **Bookmarks** 集合中。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmarks/member/Add) | 返回一个 **[Bookmark](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmark/obj)** 对象，该对象代表添加到区域中的书签。 |
| [Exists](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmarks/member/Exists) | 判断指定书签是否存在。如果存在指定的书签，则返回 **True** 。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmarks/member/Item) | 返回集合中的单个 **[Bookmark](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmark/obj)** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmarks/member/Application) | 返回一个 [Application ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)对象，该对象代表 WPS 应用程序。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmarks/member/Count) | 返回 **Bookmarks** 集合中的项目数。 **Long** 类型，只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmarks/member/Creator) | 返回一个 32 位整数，该整数指出用于创建指定对象的应用程序。 **Long** 类型，只读。 |
| [DefaultSorting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmarks/member/DefaultSorting) | 返回或设置 **“插入”** 菜单上 **“书签”** 对话框中显示的书签名的排序依据选项。 **WdBookmarkSortBy** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmarks/member/Parent) | 返回一个 **Object** 类型的值，该值代表指定 **Bookmarks** 集合中的父对象。 |
| [ShowHidden](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmarks/member/ShowHidden) | 如果 **Bookmarks** 集合中包括隐藏书签，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |