# HeadersFooters 对象

 **[HeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeaderFooter/obj)** 对象的集合，这些对象代表文档的指定节中的页眉或页脚。

## 说明


使用 **Headers** 或 **Footers** 属性返回 **HeadersFooters** 集合。


## 示例


```JavaScript
/*本示例显示活动文档的第一节的主页脚中的文本。*/
function test() {
    let headersFooter = ActiveDocument.Sections.Item(1).Footers.Item(wdHeaderFooterPrimary)
    if (headersFooter.Range.Text !== "\r") {
        alert(headersFooter.Range.Text)
    } else {
        alert("Footer is empty")
    }
}
```
不能将 **HeaderFooter** 对象添加到 **HeadersFooters** 集合。

使用 **Headers** (_Index_) 或 **Footers** (_Index_) 可返回一个 **HeaderFooter** 对象，其中 index 为 **WdHeaderFooterIndex** 常量（ **wdHeaderFooterEvenPages** 、 **wdHeaderFooterFirstPage** 或 **wdHeaderFooterPrimary** ）之一。



```JavaScript
/*本示例更改主页眉和活动文档第一节的主页脚的文字。*/
function test() {
    ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterPrimary).Range.Text = "Header text"
    ActiveDocument.Sections.Item(1).Footers.Item(wdHeaderFooterPrimary).Range.Text = "Footer text"
}
```
您也可以使用 **HeaderFooter** 属性和 **Selection** 对象来返回单个 **HeaderFooter** 对象。

使用 **DifferentFirstPageHeaderFooter** 属性和 **PageSetup** 对象可指定不同的首页。



```JavaScript
/*本示例在活动文档中第一节的第一个页脚中插入文字。*/
function test() {
    ActiveDocument.PageSetup.DifferentFirstPageHeaderFooter = true
    ActiveDocument.Sections.Item(1).Footers.Item(wdHeaderFooterFirstPage).Range.InsertBefore("Written by Kate Edson")
}
```
使用 **OddAndEvenPagesHeaderFooter** 属性和 **PageSetup** 对象可为奇数页和偶数页设置不同的页眉和页脚。如果 **OddAndEvenPagesHeaderFooter** 属性为 **True** ，则可使用 **wdHeaderFooterPrimary** 返回奇数页的页眉或页脚，使用 **wdHeaderFooterEvenPages** 返回偶数页的页眉和页脚。

使用 **Add** 方法和 **PageNumbers** 对象可在页眉或页脚中添加页码。



```JavaScript
/*本示例将页码添加到活动文档第一节的第一页的页脚。*/
function test() {
    let section = ActiveDocument.Sections.Item(1)
    section.PageSetup.DifferentFirstPageHeaderFooter = true
    section.Footers.Item(wdHeaderFooterPrimary).PageNumbers.Add(null, true)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeadersFooters/member/Item) | 返回一个 **HeaderFooter** 对象，该对象代表一个区域或部分中的页眉或页脚。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeadersFooters/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeadersFooters/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中页眉和/或页脚的数目。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeadersFooters/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeadersFooters/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **HeadersFooters** 对象的父对象。 |