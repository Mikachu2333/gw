# ListFormat.CountNumberedItems

返回指定 **ListFormat** 对象中的项目符号或编号项目和 LISTNUM 域的数量。



## 语法

express.**CountNumberedItems(NumberType, Level)**

express   一个代表 **ListFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NumberType | 可选 | any | 指定编号的类型。 |
| Level | 可选 | any | 指定编号的级别。 |

## 返回值

number（int4 精度）

## 示例


```JavaScript
/*此示例使用第二个编号列表模板将所选内容格式化为列表，然后，该示例对所选内容中的编号、项目符号项和 LISTNUM 域进行计数，并在消息框中显示结果。*/
function test() {
    let listFormat = Selection.Range.ListFormat
    listFormat.ApplyListTemplate(ListGalleries(wdNumberGallery).ListTemplates(2))
    alert(listFormat.CountNumberedItems())
}
```


```JavaScript
/*本示例显示活动文档中一级编号或项目符号项目数。*/
function test() {
    alert(ActiveDocument.Content.ListFormat.CountNumberedItems(null, 1))
}
```


```JavaScript
/*本示例将变量 range 设置为包括活动文档中第三段到第六段的一个区域，然后显示该区域项目符号或编号项目的数量。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    let range = ActiveDocument.Range(paragraphs.Item(3).Range.Start, paragraphs.Item(6).Range.End)
    alert(range.ListFormat.CountNumberedItems(wdNumberParagraph))
}
```
