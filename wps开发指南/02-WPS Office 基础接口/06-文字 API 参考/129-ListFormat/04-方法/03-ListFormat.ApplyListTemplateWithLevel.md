# ListFormat.ApplyListTemplateWithLevel

对指定级别应用一组列表格式特征。



## 语法

express.**ApplyListTemplateWithLevel(ListTemplate, ContinuePreviousList, ApplyTo, DefaultListBehavior, ApplyLevel)**

express   一个代表 **ListFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ListTemplate | 必选 | ListTemplate | 要应用的列表模板。 |
| ContinuePreviousList | 可选 | any | 如果为 **True** ，则接续前一列表的编号；如果为 **False** ，则新建一个列表。 |
| ApplyTo | 可选 | any | 要应用列表模板的列表部分。可以是 **[WdListApplyTo](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdListApplyTo)** 常量。 |
| DefaultListBehavior | 可选 | any | 设置可指定 WPS 是否使用新的网页格式，以便列表具有更好的显示效果的值。其值可取下列 **[WdDefaultListBehavior](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdDefaultListBehavior)** 常量之一： **wdWord8ListBehavior** （使用与 WPS 97 兼容的格式）或 **wdWord9ListBehavior** （使用适于网页的格式）。考虑到兼容问题，默认常量为 **wdWord8ListBehavior** 。但是在新建过程中若要建立缩进式多级列表，应当使用 **wdWord9ListBehavior** ，以利用改进过的适用于网页的格式。 |
| ApplyLevel | 可选 | any | 要应用列表模板的级别。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将变量 range 设置为活动文档中的某个区域，然后判断如果该区域未具有列表格式，则为该区域设置第四种多级符号列表模板的格式。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    let range = ActiveDocument.Range(paragraphs.Item(3).Range.Start, paragraphs.Item(6).Range.End)
    if (range.ListFormat.ListType == wdListNoNumbering) {
        range.ListFormat.ApplyListTemplateWithLevel(ListGalleries(wdOutlineNumberGallery).ListTemplates(4))
    }
}
```


```JavaScript
/*本示例为活动文档应用该文档上第二列表模板的第一个列表级别的格式。*/
function test() {
    let listFormat = ActiveDocument.Range().ListFormat
    listFormat.ApplyListTemplateWithLevel(ActiveDocument.ListTemplates.Item(2), false, wdListApplyToWholeList, wdWord9ListBehavior, 1)
}
```
