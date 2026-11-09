# TextRetrievalMode 对象

代表控制如何从 **Range** 对象中检索文本的选项。

## 说明


使用 **TextRetrievalMode** 属性可返回一个 **TextRetrievalMode** 对象。


## 示例


```JavaScript
/*本示例从引用选定文本的区域中除去域代码和隐藏文字，并显示文本。*/
function test() {
    let trMode = ActiveDocument.Sentences.Item(1).TextRetrievalMode
    trMode.IncludeHiddenText = false
    trMode.IncludeFieldCodes = false
    alert(trMode.Parent.Text)
}
```


```JavaScript
/*此示例显示所选内容的文本检索视图是否为wdPrintView。*/
function test() {
    alert(Selection.Range.TextRetrievalMode.ViewType == wdPrintView)
}
```
更改 **TextRetrievalMode** 对象的 **ViewType** 、 **IncludeHiddentText** 或 **IncludeFieldCodes** 属性不会更改屏幕显示。相反，在使用 **Text** 属性时，更改上述属性之一会影响从 **Range** 对象中检索的文本。


{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Duplicate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextRetrievalMode/member/Duplicate) | 返回一个只读 **TextRetrievalMode** 对象，该对象代表与从 **Range** 对象检索文字相关的选项。 |
| [IncludeFieldCodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextRetrievalMode/member/IncludeFieldCodes) | 如果从指定区域获取的文本包含域代码，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [IncludeHiddenText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextRetrievalMode/member/IncludeHiddenText) | 如果从指定区域检索的文本包含隐藏文字，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ViewType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextRetrievalMode/member/ViewType) | 返回或设置 **TextRetrievalMode** 对象的视图。 **WdViewType** 类型，可读写。 |