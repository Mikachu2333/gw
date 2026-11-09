# HeadersFooters.Item

返回一个 **HeaderFooter** 对象，该对象代表一个区域或部分中的页眉或页脚。



## 语法

express.**Item(Index)**

express   一个代表 **HeadersFooters** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | WdHeaderFooterIndex | 指定区域或部分中页眉或页脚的常量。 |

## 返回值

HeaderFooter

## 示例


```JavaScript
/*本示例在活动文档中创建首页页眉并设置其格式。*/
function test() {
    Application.ActiveDocument.PageSetup.DifferentFirstPageHeaderFooter = true
    let range = Application.ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterFirstPage).Range
    range.InsertBefore("Sales Report")
    range.Font.Bold = true
    range.Font.Size = "15"
    range.Font.Color = wdColorBlue
    range.Paragraphs.Alignment = wdAlignParagraphCenter
}
```


```JavaScript
/*本示例在活动文档上第一节的页脚和页眉中添加页码，并显示页眉中页码的数量。*/
function test() {
    let section = Application.ActiveDocument.Sections.Item(1)
    section.Footers.Item(wdHeaderFooterPrimary).PageNumbers.Add(wdAlignPageNumberInside)
    section.Headers.Item(wdHeaderFooterPrimary).PageNumbers.Add(wdAlignPageNumberRight)
    alert(section.Headers.Item(wdHeaderFooterPrimary).PageNumbers.Count)
}
```
