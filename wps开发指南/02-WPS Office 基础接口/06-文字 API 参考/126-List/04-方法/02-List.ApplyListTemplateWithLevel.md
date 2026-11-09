# List.ApplyListTemplateWithLevel

对指定 **List** 对象应用一组列表格式特征，可以选择用于指定级别。



## 语法

express.**ApplyListTemplateWithLevel(ListTemplate, ContinuePreviousList, DefaultListBehavior, ApplyLevel)**

express   一个代表 **List** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ListTemplate | 必选 | ListTemplate | 要应用的列表模板。 |
| ContinuePreviousList | 可选 | any | 如果值为 **True** ，则继续前一列表的编号；如果为 **False** ，则新建一个列表。 |
| DefaultListBehavior | 可选 | any | 设置可指定 WPS 是否使用新的网页格式，以便列表具有更好的显示效果的值。其值可取下列 **[WdDefaultListBehavior](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdDefaultListBehavior)** 常量之一： **wdWord8ListBehavior** （使用与 WPS 97 兼容的格式）或 **wdWord9ListBehavior** （使用适于网页的格式）。考虑到兼容问题，默认常量为 **wdWord8ListBehavior** 。但是在新建过程中若要建立缩进式多级列表，应当使用 **wdWord9ListBehavior** ，以利用改进过的适用于网页的格式。 |
| ApplyLevel | 可选 | any | 要应用列表模板的级别。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将变量 range 设置为活动文档的一个区域，然后判断如果其中的列表格式的类型为wdListSimpleNumbering，则为该区域上第一个格式列表设置第四种多级符号列表模板的格式。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    let range = ActiveDocument.Range(paragraphs.Item(3).Range.Start, paragraphs.Item(6).Range.End)
    if (range.ListFormat.ListType == wdListSimpleNumbering) {
        range.ListFormat.List.ApplyListTemplateWithLevel(ListGalleries(wdOutlineNumberGallery).ListTemplates(4))
    }
}
```


```JavaScript
/*本示例为第一个文档上的第一个列表应用该文档上第五个列表模板的第一个列表级别的格式。*/
function test() {
    let document = Documents.Item(1)
    let list = document.Lists.Item(1)
    list.ApplyListTemplateWithLevel(document.ListTemplates.Item(5), false, wdWord9ListBehavior, 1)
}
```
