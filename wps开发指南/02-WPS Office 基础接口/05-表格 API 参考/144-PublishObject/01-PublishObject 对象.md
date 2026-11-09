# PublishObject 对象

代表保存为网页的工作簿中的项，并可以根据 **PublishObject** 对象中属性和方法所指定的值进行刷新。

## 说明


 **PublishObject** 对象是 **[PublishObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObjects/obj)** 集合的成员。

使用 **[PublishObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/PublishObjects)** (_index_)（其中 _index_ 是工作簿中指定项的索引号）可返回一个 **PublishObject** 对象。


## 示例


```JavaScript
/*本示例设置第一张工作簿中第一个项的保存位置。本示例假定已经创建PublishObject对象。*/
function test() {
    Workbooks.Item(1).PublishObjects.Item(1).Filename = "D:\\example1.html"
}
```


```JavaScript
/*本示例将第一张工作簿中工作表Sheet1保存到名为 example1.html 的网页。*/
function test() {
    let objPublish = Workbooks.Item(1).PublishObjects.Add(xlSourceSheet, "D:\\example1.html", "Sheet1")
    objPublish.HtmlType = xlHtmlStatic
    objPublish.Title = "example_PublishObject"
    objPublish.Publish()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObject/member/Delete) | 删除对象。 |
| [Publish](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObject/member/Publish) | 将文档中的项或项的集合保存到网页中。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AutoRepublish](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObject/member/AutoRepublish) | 在保存工作簿时，ET 判断 **[PublishObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObjects/obj)** 集合中的任意一个项目是否具有设置为 **True** 的 **AutoRepublish** 属性。如果有，则重新发布该项目。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [DivID](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObject/member/DivID) | 返回用于标识网页上 HTML \<DIV\> 标记的唯一标识符。此标记与保存为网页的文档中的某一项相关联。该项可以是整个工作簿、一张工作表、选定的打印区域、自动筛选区域、单元格区域、图表、数据透视表或查询表。 **String** 类型，只读。 |
| [Filename](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObject/member/Filename) | 返回或设置保存指定源对象位置的 URL（Intranet 或网站上）或路径（本地或网络）。 **String** 型，可读写。 |
| [HtmlType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObject/member/HtmlType) | 返回或设置在将指定项保存到网页中时，由 ET 所生成的 HTML 的类型。可以为下表中列出的 **[XlHtmlType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlHtmlType)** 常量之一，用于指定该项在网页中是静态还是可交互的。默认值为 **xlHtmlStatic** 。 |
| [Sheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObject/member/Sheet) | 返回指定的 **[PublishObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObject/obj)** 对象的工作表名称。只读 **String** 类型。 |
| [Source](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObject/member/Source) | 返回一个代表唯一名称的 **Variant** 值，该名称用于标识其 **[SourceType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObject/member/SourceType)** 属性值为 **xlSourceRange** 、 **xlSourceChart** 、 **xlSourcePrintArea** 、 **xlSourceAutoFilter** 、 **xlSourcePivotTable** 或 **xlSourceQuery** 的项。 |
| [SourceType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObject/member/SourceType) | 返回 **[XlSourceType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSourceType)** 值，它代表所发布项目的类型。 |
| [Title](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObject/member/Title) | 返回或设置在将文档另存为网页时的网页标题。 **String** 型，可读写。 |