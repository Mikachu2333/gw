# TablesOfFigures 对象

 **[TableOfFigures](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfFigures/obj)** 对象的集合，这些对象代表文档中的图表目录。

## 说明


使用 **TablesOfFigures** 属性可返回 **TablesOfFigures** 集合。

使用 **Add** 方法可向文档中添加图表目录。图表目录将图表标题按其在文档中出现的顺序列出。

使用 **TablesOfFigures** (_Index_) 可返回一个 **TableOfFigures** 对象，其中 _Index_ 为索引号。索引号代表图表目录在文档中的位置。


## 示例


```JavaScript
/*本示例对活动文档中的所有图表目录应用“古典”格式。*/
function test() {
    ActiveDocument.TablesOfFigures.Format = wdTOFClassic
}
```


```JavaScript
/*本示例将活动文档中的所选内容替换为包含题注标签和页码的图表目录。*/
function test() {
    ActiveDocument.TablesOfFigures.Add(Selection.Range, "图表", true, false, null, null, null, null, null, true)
}
```


```JavaScript
/*本示例更新活动文档中第一个图表目录中各目录项的页码。*/
function test() {
    ActiveDocument.TablesOfFigures.Item(1).UpdatePageNumbers()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TablesOfFigures/member/Add) | 返回一个 **TableOfFigures** 对象，该对象代表添加到文档中的图表目录。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TablesOfFigures/member/Item) | 返回集合中的单个 **TableOfFigures** 对象。 |
| [MarkEntry](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TablesOfFigures/member/MarkEntry) | 在指定范围后插入一个 TC（“目录”项）域。该方法返回一个代表 TC 域的 **Field** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TablesOfFigures/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中图表目录的数目。只读。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TablesOfFigures/member/Format) | 返回或设置指定文档中图表目录的格式设置。 **WdTofFormat** 类型，可读写。 |