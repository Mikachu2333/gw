# Sections 对象

所选内容、范围或文档中的 **[Section](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Section/obj)** 对象的集合。

## 说明


表示指定文档的 **Section** 对象集合

使用 **Sections** 属性返回 **Sections** 集合。


## 示例


```JavaScript
/*本示例在活动文档最后一节的末尾插入文本“End of section”。*/
function test() {
    let range = Application.ActiveDocument.Sections.Last.Range
    range.InsertAfter("End of section")
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
/*本示例显示活动文档中的节数，在所选内容的第一段上方插入分节符，然后重新显示节数。*/
function test() {
    alert(ActiveDocument.Sections.Count + " sections")
    Selection.Paragraphs(1).Range.InsertBreak(wdSectionBreakContinuous)
    alert(ActiveDocument.Sections.Count & " sections")
}
```
使用 Sections(index)（其中 index 是索引号）返回单个 **Section** 对象。



```JavaScript
/*本示例更改活动文档中第一节左、右页边距。*/
function test() {
    let pageSetup = ActiveDocument.Sections.Item(1).PageSetup
    pageSetup.LeftMargin = InchesToPoints(0.5)
    pageSetup.RightMargin = InchesToPoints(0.5)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sections/member/Add) | 返回一个 **Section** 对象，该对象代表添加到文档中的新节。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sections/member/Item) | 返回集合中的单个 **Section** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sections/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sections/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中的节数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sections/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [First](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sections/member/First) | 返回一个 **Section** 对象，该对象代表 **Sections** 集合中的第一个项目。 |
| [Last](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sections/member/Last) | 将 **Sections** 集合中的最后一项作为 **Section** 对象返回。 |
| [PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sections/member/PageSetup) | 返回一个 **PageSetup** 对象，该对象与指定文档、区域、节或选定内容相关联。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sections/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Sections** 对象的父对象。 |