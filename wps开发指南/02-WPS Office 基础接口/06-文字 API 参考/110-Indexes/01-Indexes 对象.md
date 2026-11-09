# Indexes 对象

 **[Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Index/obj)** 对象的集合，该集合代表指定文档中的所有索引。

## 说明


使用 **Indexes** 属性可返回 **Indexes** 集合。


## 示例


```JavaScript
/*本示例将活动文档中的索引格式设置为古典格式。*/
function test() {
    ActiveDocument.Indexes.Format = wdIndexClassic
}
```
使用 **Add** 方法可创建一条索引并将其添加到 **Indexes** 集合。



```JavaScript
/*本示例在活动文档的结尾处创建一个索引。*/
function test() {
    let range = ActiveDocument.Content
    range.Collapse(wdCollapseEnd)
    ActiveDocument.Indexes.Add(range, null, null, wdIndexRunin)
}
```
使用 **Indexes** (_Index_) 可返回一个 **Index** 对象，其中 _Index_ 为索引号。索引号代表 **Index** 对象在文档中的位置。



```JavaScript
/*本示例更新活动文档中的第一条索引。*/
function test() {
    let indexes = Application.ActiveDocument.Indexes
    if (indexes.Count >= 1) {
        indexes.Item(1).Update()
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Indexes/member/Add) | 返回一个 **Index** 对象，该对象代表添加到文档的新索引。 |
| [AutoMarkEntries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Indexes/member/AutoMarkEntries) | 用对应文件中的索引项将 XE（索引项）域自动添至指定文档。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Indexes/member/Item) | 返回集合中的单个 **Index** 对象。 |
| [MarkAllEntries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Indexes/member/MarkAllEntries) | 在 **Range** 中文字的所有实例后插入 XE（索引项）域。 |
| [MarkEntry](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Indexes/member/MarkEntry) | 在指定范围后插入一个 XE（索引项）域。该方法返回一个代表 XE 域的 **Field** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Indexes/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中索引的数目。只读。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Indexes/member/Format) | 返回或设置 **WdIndexFormat** ，代表指定文档中索引的格式。可读写。 |