# PageNumbers.StartingNumber

返回或设置注释编号、行号或页码的起始值。可读/写 **Long** 类型。



## 语法

express.**StartingNumber**

express   一个代表 **PageNumbers** 对象的变量。

## 类型

number（int4 精度）

## 说明


只有在页面视图中才能看到行号。

当应用于页码时，该属性返回或设置指定 **[HeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeaderFooter/obj)** 对象的起始页码。该页码是否在第一页显示取决于 **[ShowFirstPageNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageNumbers/member/ShowFirstPageNumber)** 属性的设置。如果 **[RestartNumberingAtSection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageNumbers/member/RestartNumberingAtSection)** 属性设置为 **False** ，它将覆盖 **StartingNumber** 属性，以便可以从前一节继续编排页码。



## 示例


```JavaScript
/*本示例设置页码属性，然后为活动文档的第一节的主页眉添加页码。*/
function test() {
    let pageNumbers = ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterPrimary).PageNumbers
    pageNumbers.NumberStyle = wdPageNumberStyleArabic
    pageNumbers.IncludeChapterNumber = false
    pageNumbers.RestartNumberingAtSection = true
    pageNumbers.StartingNumber = 5
    pageNumbers.Add(wdAlignPageNumberCenter, true)
}
```


```JavaScript
/*本示例显示所选页眉中的页码的起始值。*/
function test() {
    let pageNumbers = Selection.HeaderFooter.PageNumbers
    alert(pageNumbers.StartingNumber)
}
```
