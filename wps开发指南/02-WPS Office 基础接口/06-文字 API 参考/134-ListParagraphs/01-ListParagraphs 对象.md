# ListParagraphs 对象

 **Paragraph** 对象的集合，该集合代表应用了列表格式的指定文档、列表或范围中的段落。

## 说明


使用 **ListParagraphs** 属性可返回 **ListParagraphs** 集合。


## 示例


```JavaScript
/*本示例突出显示活动文档中具有列表格式的段落集合。*/
function test() {
    for (let i = 1; i <= ActiveDocument.ListParagraphs.Count; i++) {
        ActiveDocument.ListParagraphs.Item(i).Range.HighlightColorIndex = wdTurquoise
    }
}
```


```JavaScript
/*本示例显示活动文档中第一个列表的第一个列表段落的行距。*/
function test() {
    let paragraph = ActiveDocument.Lists.Item(1).ListParagraphs.Item(1)
    alert(paragraph.LineSpacing)
}
```
使用 **ListParagraphs** (_Index_) 可返回具有列表格式的单个 **[Paragraph](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/obj)** 对象，其中 _Index_ 是索引号。

段落可有两种类型的列表格式。第一种类型包括在该列表的各段开头自动添加的编号或项目符号。第二种类型包括可以置于段落内任意位置的 LISTNUM 域。每个段落中可有多个 LISTNUM 域。

要向段落添加列表格式，可以使用 **ApplyListTemplate** 、 **ApplyBulletDefault** 、 **ApplyNumberDefault** 或 **ApplyOutlineNumberDefault** 方法。通过指定范围的 **ListFormat** 对象可以访问这些方法。

在一个文档中，以上集合的 **Count** 属性返回的只是正文中具有列表格式的段落的个数。要统计其他部分中具有列表格式的段落的个数，请使用带有 **Range** 对象的相应集合。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListParagraphs/member/Item) | 返回集合中的单个 **Paragraph** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListParagraphs/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中列表段落的数目。只读。 |