# Indexes.Add

返回一个 **Index** 对象，该对象代表添加到文档的新索引。



## 语法

express.**Add(Range, HeadingSeparator, RightAlignPageNumbers, Type, NumberOfColumns, AccentedLetters, SortBy, IndexLanguage)**

express   一个代表 **Indexes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 要显示索引的区域。如果区域未折叠，索引将替换此区域。 |
| HeadingSeparator | 可选 | any | 索引中字母组（以相同字母开头的词条）之间的文本。可以是 **WdHeadingSeparator** 常量之一。 |
| RightAlignPageNumbers | 可选 | any | 如果该属性值为 **True** ，页码将与页面右边距对齐。 |
| Type | 可选 | any | 指定次索引项是与主索引项位于同一行（接排式），还是位于单独一行（缩进式）。可以是下列 **WdIndexType** 常量之一： **wdIndexIndent** 或 **wdIndexRunin** 。 |
| NumberOfColumns | 可选 | any | 索引每页的列数。指定为 0（零）会将索引中的列数设置为与文档中的列数相同的数。 |
| AccentedLetters | 可选 | any | 如果该属性值为 **True** ，则在索引中包括单独用于重音字母的标题（例如，以“?”开头的单词与以“A”开头的单词将列在不同的标题下）。 |
| SortBy | 可选 | any | 要用于指定索引的排序准则。可以是下列 **WdIndexSortBy** 常量之一： **wdIndexSortByStroke** 或 **wdIndexSortBySyllable** 。 |
| IndexLanguage | 可选 | any | 要用于指定索引的排序语言。可以是任意 **WdLanguageID** 常量。 |

## 返回值

Index

## 说明


索引是根据文档中的索引项（XE）域创建的。使用 **MarkEntry** 方法可标记索引中所包含的索引项。



## 示例


```JavaScript
/*本示例标记一个索引项，然后在活动文档的结尾处创建一个索引。*/
function test() {
    ActiveDocument.Indexes.MarkEntry(Selection.Range, "My Entry")
    let range = ActiveDocument.Content
    range.Collapse(wdCollapseEnd)
    ActiveDocument.Indexes.Add(range, null, null, wdIndexRunin)
}
```


```JavaScript
/*本示例标记一个索引项，然后在活动文档的起始处创建一个索引。*/
function test() {
    ActiveDocument.Indexes.MarkEntry(ActiveDocument.Paragraphs.Item(1).Range, "example")
    let range = ActiveDocument.Content
    range.Collapse(wdCollapseStart)
    ActiveDocument.Indexes.Add(range, wdHeadingSeparatorNone, true, wdIndexIndent, 0, true, wdIndexSortByStroke, wdSimplifiedChinese)
}
```
