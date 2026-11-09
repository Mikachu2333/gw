# TextRetrievalMode.IncludeFieldCodes

如果从指定区域获取的文本包含域代码，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**IncludeFieldCodes**

express   一个代表 **TextRetrievalMode** 对象的变量。

## 类型

boolean

## 说明


默认值与 **“选项”** 对话框（ **“工具”** 菜单）中 **“视图”** 选项卡上的 **“域代码”** 选项的设置相同，直到该属性已设置。

使用 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象的 **[Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Text)** 属性可从指定区域检索文本。



## 示例


```JavaScript
/*此示例在消息框中显示活动文档中第一段的文本。该示例使用 IncludeFieldCodes 属性来排除域代码。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    range.TextRetrievalMode.IncludeFieldCodes = false
    alert(range.Text)
}
```


```JavaScript
/*本示例从引用选定文本的区域中除去域代码和隐藏文字，并显示文本。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        let trMode = Selection.Range.TextRetrievalMode
        trMode.IncludeHiddenText = false
        trMode.IncludeFieldCodes = false
        alert(Selection.Range.Text)
    }
}
```
