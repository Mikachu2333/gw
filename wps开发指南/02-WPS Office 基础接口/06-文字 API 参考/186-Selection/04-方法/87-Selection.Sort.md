# Selection.Sort

对指定的所选内容中的段落进行排序。



## 语法

express.**Sort(ExcludeHeader, FieldNumber, SortFieldType, SortOrder, FieldNumber2, SortFieldType2, SortOrder2, FieldNumber3, SortFieldType3, SortOrder3, SortColumn, Separator, CaseSensitive, BidiSort, IgnoreThe, IgnoreKashida, IgnoreDiacritics, IgnoreHe, LanguageID, SubFieldNumber, SubFieldNumber2, SubFieldNumber3)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ExcludeHeader | 可选 | any | 如果该参数值为 **True** ，则不对首行或段落标题进行排序。默认值为 **False** 。 |
| FieldNumber | 可选 | any | 用于排序的第一个域。 |
| SortFieldType | 可选 | any | FieldNumber 的排序类型。可以是 **WdSortFieldType** 常量之一。默认值为 **wdSortFieldAlphanumeric** 。根据您选择或安装的语言支持（例如，美国英语），某些 **WdSortFieldType** 常量可能不可用。 |
| SortOrder | 可选 | any | 对 FieldNumber 进行排序时使用的排序顺序。可以是一个 **[WdSortOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdSortOrder)** 常量。默认值为 **wdSortOrderAscending** 。 |
| FieldNumber2 | 可选 | any | 用于排序的第二个域。 |
| SortFieldType2 | 可选 | any | FieldNumber2 的排序类型。可以是 **WdSortFieldType** 常量之一。默认值为 **wdSortFieldAlphanumeric** 。根据您选择或安装的语言支持（例如，美国英语），某些 **WdSortFieldType** 常量可能不可用。 |
| SortOrder2 | 可选 | any | 对 FieldNumber2 进行排序时使用的排序顺序。可以是一个 **[WdSortOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdSortOrder)** 常量。默认值为 **wdSortOrderAscending** 。 |
| FieldNumber3 | 可选 | any | 用于排序的第三个域。 |
| SortFieldType3 | 可选 | any | FieldNumber3 的排序类型。可以是 **WdSortFieldType** 常量之一。默认值为 **wdSortFieldAlphanumeric** 。根据您选择或安装的语言支持（例如，美国英语），某些 **WdSortFieldType** 常量可能不可用。 |
| SortOrder3 | 可选 | any | 对 FieldNumber3 进行排序时使用的排序顺序。可以是 **[WdSortOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdSortOrder)** 常量之一。默认值为 **wdSortOrderAscending** 。 |
| SortColumn | 可选 | any | 如果该参数值为 **True** ，则只对由 **Selection** 对象指定的列进行排序。 |
| Separator | 可选 | any | 域分隔符的类型。 |
| CaseSensitive | 可选 | any | 如果该参数值为 **True** ，则排序时区分大小写。默认值为 **False** 。 |
| BidiSort | 可选 | any | 如果该参数值为 **True** ，则基于从右向左语言的规则进行排序。根据您所选择或安装的语言支持（例如，美国英语），此参数可能不可用。 |
| IgnoreThe | 可选 | any | 如果该参数值为 **True** ，则对从右向左的语言文本进行排序时忽略阿拉伯字符 alef lam。根据您所选择或安装的语言支持（例如，美国英语），此参数可能不可用。 |
| IgnoreKashida | 可选 | any | 如果该参数值为 **True** ，则对从右向左的语言文本进行排序时忽略 Kashidas。根据您所选择或安装的语言支持（例如，美国英语），此参数可能不可用。 |
| IgnoreDiacritics | 可选 | any | 如果该参数值为 **True** ，则对从右向左的语言文本进行排序时忽略双向控制字符。根据您所选择或安装的语言支持（例如，美国英语），此参数可能不可用。 |
| IgnoreHe | 可选 | any | 如果该参数值为 **True** ，则对从右向左的语言文本进行排序时忽略希伯来字符 he。根据您所选择或安装的语言支持（例如，美国英语），此参数可能不可用。 |
| LanguageID | 可选 | any | 指定排序语言。可以是 **WdLanguageID** 常量之一。 |
| SubFieldNumber | 可选 | any | 用于排序的二级域编号。 |
| SubFieldNumber2 | 可选 | any | 用于排序的二级域编号。 |
| SubFieldNumber3 | 可选 | any | 用于排序的二级域编号。 |

## 返回值

void

## 示例


```JavaScript
/*本示例在新文档中插入三行文本，然后按字母数字升序对这些行进行排序。*/
function test() {
    Documents.Add()
    Selection.InsertAfter("pear\nzucchini\napple\n")
    Selection.Sort(null, null, null, wdSortOrderAscending)
}
```


```JavaScript
/*本示例对活动文档的所有段落按照数字顺序降序进行排序，排序区分大小写，排序语言为简体中文。*/
function test() {
    ActiveDocument.Content.Select()
    Selection.Sort(false, null, wdSortFieldNumeric, wdSortOrderDescending, null, null, null, null, null, null, null, null, true, null, null, null, null, null, wdSimplifiedChinese)
}
```
