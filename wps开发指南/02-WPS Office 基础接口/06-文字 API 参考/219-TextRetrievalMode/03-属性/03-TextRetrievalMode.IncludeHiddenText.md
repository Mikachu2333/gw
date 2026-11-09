# TextRetrievalMode.IncludeHiddenText

如果从指定区域检索的文本包含隐藏文字，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**IncludeHiddenText**

express   一个代表 **TextRetrievalMode** 对象的变量。

## 类型

boolean

## 说明


在设置该属性前，其默认值一直与 **“选项”** 对话框（ **“工具”** 菜单）中的 **“视图”** 选项卡上的 **“隐藏文字”** 选项的当前设置相同。

使用 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象的 **[Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Text)** 属性可从指定区域检索文本。



## 示例


```JavaScript
/*此示例显示活动文档中第一个句子的文本。该示例使用 IncludeHiddenText 属性来包含隐藏文本。*/
function test() {
    let range = ActiveDocument.Sentences.Item(1)
    range.TextRetrievalMode.IncludeHiddenText = true
    alert(range.Text)
}
```


```JavaScript
/*本示例设置所选区域检索的文本不包含隐藏文字。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        let range = Selection.Range
        range.TextRetrievalMode.IncludeHiddenText = false
        if (range.Text == "") {
            alert("Selection is hidden")
        }
    }
}
```
