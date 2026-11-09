# TablesOfContents 对象

 **[TableOfContents](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfContents/obj)** 对象的集合，这些对象代表文档中的目录。

## 说明


使用 **TablesOfContents** 属性可返回 **TablesOfContents** 集合。


## 示例


```JavaScript
/*本示例在活动文档中插入一个引用所选文字的目录项。*/
function test() {
    ActiveDocument.TablesOfContents.MarkEntry(Selection.Range, "Introduction", null, null, 2)
}
```
使用 **Add** 方法可向文档中添加目录。



```JavaScript
/*本示例在活动文档的开头添加目录。该示例根据具有“标题 1”、“标题 2”或“标题 3”样式的所有段落生成目录。*/
function test() {
    let range = ActiveDocument.Range(0, 0)
    ActiveDocument.TablesOfContents.Add(range, true, 1, 3, false)
}
```
使用 **TablesOfContents** (_Index_) 可返回一个 **TableOfContents** 对象，其中 _Index_ 为索引号。索引号代表目录在文档中的位置。



```JavaScript
/*本示例更新活动文档中第一个图表目录中各目录项的页码。*/
function test() {
    ActiveDocument.TablesOfContents.Item(1).UpdatePageNumbers()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TablesOfContents/member/Add) | 返回一个 **TableOfContents** 对象，该对象代表添加到文档中的目录。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TablesOfContents/member/Item) | 返回集合中的单个 **TableOfContents** 对象。 |
| [MarkEntry](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TablesOfContents/member/MarkEntry) | 在指定范围后插入一个 TC（“目录”项）域。该方法返回一个代表 TC 域的 **Field** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TablesOfContents/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中目录的数目。只读。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TablesOfContents/member/Format) | 返回或设置指定文档中目录的格式。 **WdTocFormat** 类型，可读写。 |