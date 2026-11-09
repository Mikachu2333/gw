# Selection.SortByHeadings

对指定选定内容中的标题进行排序。



## 语法

express.**SortByHeadings(SortFieldType, SortOrder, CaseSensitive, BidiSort, IgnoreThe, IgnoreKashida, IgnoreDiacritics, IgnoreHe, LanguageID)**

express   一个代表 **Selection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| SortFieldType | 可选 | any | 要使用的排序字段类型。可以是 **[WdSortFieldType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdSortFieldType)** 常量之一。 默认值是 **wdSortFieldAlphanumeric** 。根据您选择或安装的语言支持（例如，美国英语），某些常量可能不可用。 |
| SortOrder | 可选 | any | 要使用的排序顺序。可以是 **[WdSortOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdSortOrder)** 常量之一。 |
| CaseSensitive | 可选 | any | 如果该参数值为 **True** ，则排序时区分大小写。默认值为 **False** 。 |
| BidiSort | 可选 | any | 如果该参数值为 **True** ，则基于从右向左语言的规则进行排序。根据您所选择或安装的语言支持（例如，美国英语），此参数可能不可用。 |
| IgnoreThe | 可选 | any | 如果该参数值为 **True** ，则对从右向左的语言文本进行排序时忽略阿拉伯字符 alef lam。根据您所选择或安装的语言支持（例如，美国英语），此参数可能不可用。 |
| IgnoreKashida | 可选 | any | 如果该参数值为 **True** ，则对从右向左的语言文本进行排序时忽略 Kashidas。根据您所选择或安装的语言支持（例如，美国英语），此参数可能不可用。 |
| IgnoreDiacritics | 可选 | any | 如果该参数值为 **True** ，则对从右向左的语言文本进行排序时忽略双向控制字符。根据您所选择或安装的语言支持（例如，美国英语），此参数可能不可用。 |
| IgnoreHe | 可选 | any | 如果该参数值为 **True** ，则对从右向左的语言文本进行排序时忽略希伯来字符 he。根据您所选择或安装的语言支持（例如，美国英语），此参数可能不可用。 |
| LanguageID | 可选 | any | 指定排序语言。可以是 **[WdLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdLanguageID)** 常量之一。 |

## 返回值

void

## 示例


```JavaScript
/*本示例对选定内容中的标题按照数字顺序降序进行排序。*/
function test() {
    Selection.SortByHeadings(wdSortFieldNumeric, wdSortOrderDescending)
}
```


```JavaScript
/*本示例对第一个窗口中的主文档文章标题按照字母数字顺序升序排序，排序区分大小写, 排序语言为简体中文。*/
function test() {
    ActiveDocument.Content.Select()
    Selection.SortByHeadings(wdSortFieldAlphanumeric, wdSortOrderAscending, true, null, null, null, null, null, wdSimplifiedChinese)
}
```
