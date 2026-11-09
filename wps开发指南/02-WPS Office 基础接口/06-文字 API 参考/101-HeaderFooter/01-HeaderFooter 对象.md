# HeaderFooter 对象

代表单一页眉或页脚。 **HeaderFooter** 对象是 **HeadersFooters** 集合的一个成员。 **HeadersFooters** 集合包含指定文档节中的所有页眉和页脚。

## 说明


使用 **Headers** (*Index*) 或 **Footers** (*Index*) 可返回一个 **HeaderFooter** 对象，其中 index 为 **WdHeaderFooterIndex** 常量（ **wdHeaderFooterEvenPages** 、 **wdHeaderFooterFirstPage** 或 **wdHeaderFooterPrimary** ）之一。


## 示例


```JavaScript
/*本示例更改活动文档第一节中主页眉和主页脚的文字*/
function test() {
    let section = Application.ActiveDocument.Sections.Item(1)
    section.Headers.Item(wdHeaderFooterPrimary).Range.Text = "Header text"
    section.Footers.Item(wdHeaderFooterPrimary).Range.Text = "Footer text"
}
```
您也可以使用 **HeaderFooter** 属性和 **Selection** 对象来返回单个 **HeaderFooter** 对象。

不能将 **HeaderFooter** 对象添加到 **HeadersFooters** 集合中。

使用 **DifferentFirstPageHeaderFooter** 属性和 **PageSetup** 对象可指定不同的首页。



```JavaScript
/*本示例在活动文档的首页页脚中插入文字。*/
function test() {
    ActiveDocument.PageSetup.DifferentFirstPageHeaderFooter = true
    ActiveDocument.Sections.Item(1).Footers.Item(wdHeaderFooterFirstPage).Range.InsertBefore("Written by Joe Smith")
}
```
使用 **OddAndEvenPagesHeaderFooter** 属性和 **PageSetup** 对象可为奇数页和偶数页设置不同的页眉和页脚。如果 **OddAndEvenPagesHeaderFooter** 属性为 **True** ，则可使用 **wdHeaderFooterPrimary** 返回奇数页的页眉或页脚，使用 **wdHeaderFooterEvenPages** 返回偶数页的页眉和页脚。

使用 **Add** 方法和 **PageNumbers** 对象可在页眉或页脚中添加页码。



```JavaScript
/*本示例在活动文档第一节的主页脚中添加页码。*/
function test() {
    ActiveDocument.Sections.Item(1).Footers.Item(wdHeaderFooterPrimary).PageNumbers.Add()
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeaderFooter/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeaderFooter/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Exists](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeaderFooter/member/Exists) | 如果存在指定的 **HeaderFooter** 对象，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeaderFooter/member/Index) | 返回 **WdHeaderFooterIndex** 类型值，代表文档或节中指定的页眉或页脚。只读。 |
| [IsHeader](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeaderFooter/member/IsHeader) | 如果指定的 **HeaderFooter** 对象是页眉，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [LinkToPrevious](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeaderFooter/member/LinkToPrevious) | 如果指定页眉或页脚链接至前一节中相应的页眉或页脚，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PageNumbers](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeaderFooter/member/PageNumbers) | 返回一个 **PageNumbers** 集合，该集合代表指定页眉或页脚中包含的页编号字段。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeaderFooter/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **HeaderFooter** 对象的父对象。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeaderFooter/member/Range) | 返回一个 **Range** 对象，该对象表示指定页眉或页脚中包含的文档部分。 |
| [Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeaderFooter/member/Shapes) | 返回一个 **Shapes** 集合，该集合代表页眉或页脚中的所有的 **Shape** 对象。只读。 |