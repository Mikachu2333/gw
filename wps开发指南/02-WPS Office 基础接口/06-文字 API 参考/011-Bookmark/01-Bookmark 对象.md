# Bookmark 对象

代表文档、选定内容或区域中的单个书签。 **Bookmark** 对象是 **Bookmarks** 集合的成员。 **Bookmarks** 集合包括 **“书签”** 对话框中（ **“插入”** 菜单）列出的所有书签。

## 说明


使用 Bookmarks(*index*)（其中 *index* 是书签名称或索引号）可返回一个 **Bookmark** 对象。 您必须完全匹配拼写（但不必大小写匹配）的书签名称。


## 示例


```JavaScript
/*本示例选中活动文档上名为“example_2”的书签。*/
function test() {
    ActiveDocument.Bookmarks.Item("example_2").Select()
}
```
索引编号代表书签在选区 **Selection** 或区域 **Range** 对象中的位置。对 **Document** 对象，索引编号代表书签在“书签对话框”中按名称字母排序的位置。



```JavaScript
/*本示例显示活动文档上第二个书签的名称。*/
function test() {
    alert(ActiveDocument.Bookmarks.Item(2).Name)
}
```
使用 **Add** 方法将书签添加到文档范围。  



```JavaScript
/*本示例通过添加名为“temp”的书签来标记选定内容。*/
function test() {
    ActiveDocument.Bookmarks.Add("temp", Selection.Range)
}
```
可将 **BookmarkID** 属性与区域或选定内容对象配合使用，以返回 **Bookmark** 对象在 **Bookmarks** 集合中的索引编号。



```JavaScript
/*本示例显示活动文档中名为“example_1”的书签的索引编号。*/
function test() {
    alert(ActiveDocument.Bookmarks.Item("example_1").Range.BookmarkID)
}
```
将预定义书签与 **Bookmarks** 属性一起使用。



```JavaScript
/*本示例将名为“example_4”的书签设置为名为“\Para”的预定义书签标记的位置。*/
function test() {
    ActiveDocument.Bookmarks("\\Para").Copy("example_4")
}
```
使用 **Exists** 方法确定所选内容、范围或文档中是否已存在书签。



```JavaScript
/*本示例确保在选择书签之前，活动文档中存在名为“example_2”的书签。*/
function test() {
    if (ActiveDocument.Bookmarks.Exists("example_2")) {
        ActiveDocument.Bookmarks.Item("example_2").Select()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmark/member/Copy) | 将书签复制到 **Name** 参数中指定的新书签处，并返回一个 **Bookmark** 对象。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmark/member/Delete) | 删除指定的书签。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmark/member/Select) | 选择指定书签。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmark/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)** 对象，该对象代表 WPS 应用程序。 |
| [Column](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmark/member/Column) | 如果指定的书签是表格的一列，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmark/member/Creator) | 返回一个 32 位整数，该整数指出用于创建指定对象的应用程序。 **Long** 类型，只读。 |
| [Empty](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmark/member/Empty) | 如果指定书签为空，则该属性值为 **True** 。只读 **Boolean** 类型。 |
| [End](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmark/member/End) | 返回或设置书签中结束字符的位置。 **Long** 类型，可读写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmark/member/Name) | 返回指定对象的名称。 **String** 类型，只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmark/member/Parent) | 返回一个 **Object** 类型的值，该值代表指定 **Bookmark** 对象的父对象。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmark/member/Range) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表指定对象所含的部分文档。 |
| [Start](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmark/member/Start) | 返回或设置书签起始字符的位置。 **Long** 类型，可读写。 |
| [StoryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmark/member/StoryType) | 返回指定范围、选定内容或书签的文字类型。 **WdStoryType** 类型，只读。 |