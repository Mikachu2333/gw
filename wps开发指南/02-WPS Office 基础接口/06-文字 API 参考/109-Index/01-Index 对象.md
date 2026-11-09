# Index 对象

代表单个索引。 **Index** 对象是 **Indexes** 集合的一个成员。 **[Indexes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Indexes/obj)** 集合包括指定文档中的所有索引。

## 说明


使用 **Indexes** (_Index_) 可返回一个 **Index** 对象，其中 _Index_ 为索引号。索引号代表 **Index** 对象在文档中的位置。


## 示例


```JavaScript
/*本示例更新活动文档中的第一个索引。*/
function test() {
    if (ActiveDocument.Indexes.Count >= 1) {
        ActiveDocument.Indexes.Item(1).Update()
    }
}
```
使用 **Add** 方法可创建一条索引并将其添加到 **Indexes** 集合。



```JavaScript
/*本示例在活动文档的结尾处创建一个索引。*/
function test() {
    let range = ActiveDocument.Content
    range.Collapse(wdCollapseEnd)
    ActiveDocument.Indexes.Add(range, null, null, wdIndexRunin)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Index/member/Delete) | 删除指定的索引。 |
| [Update](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Index/member/Update) | 更新显示在指定索引中的项目。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AccentedLetters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Index/member/AccentedLetters) | 如果指定索引包含用于重音字母的单独的标题，则该属性值为 **True** （例如，以“À”开头的词位于一个标题下，而以“A”开头的词位于另一个标题下）。 **Boolean** 类型，可读写。 |
| [Filter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Index/member/Filter) | 返回或设置一个值，该值指定 WPS 对指定索引项的第一个字符进行分类的方式。 **wdIndexFilter** 类型，可读写。 |
| [HeadingSeparator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Index/member/HeadingSeparator) | 返回或设置索引中字母组（以相同字母开头的条目）之间的文字。与 INDEX 域中的 \\h 开关相对应。 **WdHeadingSeparator** 类型，可读写。 |
| [IndexLanguage](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Index/member/IndexLanguage) | 返回或设置一个 **[WdLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdLanguageID)** 常量，该常量代表用于指定索引的排序语言。可读写。 |
| [NumberOfColumns](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Index/member/NumberOfColumns) | 返回或设置索引中每页的列数。 **Long** 类型，可读写。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Index/member/Range) | 返回一个 **Range** 对象，该对象代表索引中包含的文档部分。 |
| [RightAlignPageNumbers](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Index/member/RightAlignPageNumbers) | 如果页码与索引中的右边距对齐，则该属性值为 **True** 。可读写 **Boolean** 类型。 |
| [SortBy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Index/member/SortBy) | 返回或设置指定索引的排序标准。 **WdIndexSortBy** 类型，可读写。 |
| [TabLeader](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Index/member/TabLeader) | 返回或设置索引中各项与它们的相关联页码之间的前导符。可读写 **WdTabLeader** 类型。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Index/member/Type) | 返回或设置索引的类型。可读/写 **[WdIndexType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdIndexType)** 类型。 |