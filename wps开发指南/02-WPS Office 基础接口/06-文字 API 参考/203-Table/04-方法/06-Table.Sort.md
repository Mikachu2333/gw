# Table.Sort

对指定的表格进行排序。



## 语法

express.**Sort(ExcludeHeader, FieldNumber, SortFieldType, SortOrder, FieldNumber2, SortFieldType2, SortOrder2, FieldNumber3, SortFieldType3, SortOrder3, CaseSensitive, BidiSort, IgnoreThe, IgnoreKashida, IgnoreDiacritics, IgnoreHe, LanguageID)**

express   一个代表 **Table** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ExcludeHeader | 可选 | any | 如果该参数值为 **True** ，则不对首行进行排序。默认值为 **False** 。 |
| FieldNumber | 可选 | any | 用于排序的第一个域。WPS 依次按 **FieldNumber** 、 **FieldNumber2** 、 **FieldNumber3** 排序。 |
| SortFieldType | 可选 | any | **FieldNumber** 的排序类型。可以是 **WdSortFieldType** 常量之一。根据您选择或安装的语言支持（例如，美国英语），以上某些常量可能不可用。默认值为 **wdSortFieldAlphanumeric** 。 |
| SortOrder | 可选 | any | 对 **FieldNumber** 进行排序时使用的排序顺序。可以是 **WdSortOrder** 常量。 |
| FieldNumber2 | 可选 | any | 用于排序的第二个域。 |
| SortFieldType2 | 可选 | any | **FieldNumber2** 的排序类型。可以是 **WdSortFieldType** 常量之一。根据您选择或安装的语言支持（例如，美国英语），以上某些常量可能不可用。默认值为 **wdSortFieldAlphanumeric** 。 |
| SortOrder2 | 可选 | any | 对 **FieldNumber2** 进行排序时使用的排序顺序。可以是一个 **WdSortOrder** 常量。 |
| FieldNumber3 | 可选 | any | 用于排序的第三个域。 |
| SortFieldType3 | 可选 | any | **FieldNumber3** 的排序类型。可以是 **WdSortFieldType** 常量之一。根据您选择或安装的语言支持（例如，美国英语），以上某些常量可能不可用。默认值为 **wdSortFieldAlphanumeric** 。 |
| SortOrder3 | 可选 | any | 对 **FieldNumber3** 进行排序时使用的排序顺序。可以是一个 **WdSortOrder** 常量。 |
| CaseSensitive | 可选 | any | 如果该参数值为 **True** ，则排序时区分大小写。默认值为 **False** 。 |
| BidiSort | 可选 | any | 如果该参数值为 **True** ，则基于从右向左语言的规则进行排序。根据您所选择或安装的语言支持（例如，美国英语），此参数可能不可用。 |
| IgnoreThe | 可选 | any | 如果该参数值为 **True** ，则对从右向左的语言文本进行排序时忽略阿拉伯字符 alef lam。根据您所选择或安装的语言支持（例如，美国英语），此参数可能不可用。 |
| IgnoreKashida | 可选 | any | 如果该参数值为 **True** ，则对从右向左的语言文本进行排序时忽略 **Kashidas** 。根据您所选择或安装的语言支持（例如，美国英语），此参数可能不可用。 |
| IgnoreDiacritics | 可选 | any | 如果该参数值为 **True** ，则对从右向左的语言文本进行排序时忽略双向控制字符。根据您所选择或安装的语言支持（例如，美国英语），此参数可能不可用。 |
| IgnoreHe | 可选 | any | 如果该参数值为 **True** ，则对从右向左的语言文本进行排序时忽略希伯来字符 **he** 。根据您所选择或安装的语言支持（例如，美国英语），此参数可能不可用。 |
| LanguageID | 可选 | any | 指定排序语言。可以是 **WdLanguageID** 常量之一。要获得 **WdLanguageID** 常量的列表，请参阅“对象浏览器”。 |

## 返回值

void

## 示例


```JavaScript
/*本示例对活动文档中的第一个表格进行排序，首行除外。*/
function test() {
    ActiveDocument.Tables.Item(1).Sort(true)
}
```


```JavaScript
/*本示例对第一个文档中的第一个表格根据第二列的日期顺序进行区分大小写的升序排序，首行除外，排序的语言为简体中文。*/
function test() {
    let table = Documents.Item(1).Tables.Item(1)
    table.Sort(true, 2, wdSortFieldDate, wdSortOrderAscending, null, null, null, null, null, null, true, true, null, null, null, null, wdSimplifiedChinese)
}
```
