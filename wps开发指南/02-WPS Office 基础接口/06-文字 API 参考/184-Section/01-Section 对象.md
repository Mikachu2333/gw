# Section 对象

代表所选内容、范围或文档中的一节

## 说明


代表所选内容、范围或文档中的一节。 **Section** 对象是 **Sections** 集合的一个成员。 **Sections** 集合包括所选内容、范围或文档中的所有节。

使用 **Sections** (Index)（其中 Index 是索引号）可返回单个 **Section** 对象。


## 示例


```JavaScript
/*本示例更改活动文档中第一节左、右页边距。*/
function test() {
    let pageSetup = ActiveDocument.Sections.Item(1).PageSetup
    pageSetup.LeftMargin = InchesToPoints(0.5)
    pageSetup.RightMargin = InchesToPoints(0.5)
}
```
使用 **Add** 方法或 **InsertBreak** 方法向文档添加新节。



```JavaScript
/*本示例在活动文档的开头添加一个新节。*/
function test() {
    let range = ActiveDocument.Range(0, 0)
    ActiveDocument.Sections.Add(range)
    range.InsertParagraphAfter()
}
```


```JavaScript
/*本示例在所选内容的第一段之前添加一个分节符。*/
function test() {
    let range = Selection.Paragraphs.Item(1).Range
    Application.ActiveDocument.Sections.Add(range)
}
```
指定 Section 对象的 Headers 和 Footers 属性返回 HeadersFooters 对象。


{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Section/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Section/member/Borders) | 返回 **Borders** 集合，该集合代表节中的所有边框。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Section/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Footers](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Section/member/Footers) | 返回一个 **HeadersFooters** 集合，该集合代表指定节的页脚。只读。 |
| [Headers](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Section/member/Headers) | 返回一个 **HeadersFooters** 集合，该集合代表指定节的页眉。只读。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Section/member/Index) | 返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。 |
| [PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Section/member/PageSetup) | 返回一个 **PageSetup** 对象，该对象与指定的节相关联。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Section/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Section** 对象的父对象。 |
| [ProtectedForForms](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Section/member/ProtectedForForms) | 如果保护指定节中的窗体，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Section/member/Range) | 返回一个 **Range** 对象，该对象代表指定对象中包含的文档部分。 |