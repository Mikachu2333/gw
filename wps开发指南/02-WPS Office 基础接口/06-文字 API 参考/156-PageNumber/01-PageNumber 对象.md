# PageNumber 对象

代表页眉或页脚中的页码。 **PageNumber** 对象是 **PageNumbers** 集合的一个成员。 **PageNumbers** 集合包含单个页眉或页脚中的所有页码。

## 说明


使用 **PageNumbers** (*Index*) 可返回一个 **PageNumber** 对象，其中 *Index* 为索引号。在大多数情况下，一个页眉或页脚只包含一个页码（索引号为 1）。


## 示例


```JavaScript
/*本示例将活动文档第一节的主页眉中的起始页码居中。*/
function test() {
    ActiveDocument.Sections.Item(1).Headers(wdHeaderFooterPrimary).PageNumbers.Item(1).Alignment = wdAlignPageNumberCenter
}
```
使用 **Add** 方法可在页眉或页脚中添加页码（PAGE 域）。



```JavaScript
/*本示例将页码添加到第一部分和任何后续部分的主页脚。页码不会显示在第一页上。*/
function test() {
    let section = ActiveDocument.Sections.Item(1)
    section.Footers.Item(wdHeaderFooterPrimary).PageNumbers.Add(wdAlignPageNumberLeft, false)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageNumber/member/Copy) | 将指定的页码复制到剪贴板上。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageNumber/member/Cut) | 将指定对象从文档中移到剪贴板上。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageNumber/member/Delete) | 删除指定的页码。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageNumber/member/Select) | 选择指定的页码。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Alignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageNumber/member/Alignment) | 返回或设置一个 **WdPageNumberAlignment** 常量，该常量代表页码的对齐方式，可读写。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageNumber/member/Index) | 返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。 |