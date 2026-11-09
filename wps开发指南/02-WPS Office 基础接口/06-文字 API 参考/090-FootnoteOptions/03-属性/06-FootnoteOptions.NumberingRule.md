# FootnoteOptions.NumberingRule

返回或设置在分页符或分节符之后的脚注或尾注的编号方式。可读写 **[WdNumberingRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdNumberingRule)** 类型。



## 语法

express.**NumberingRule**

express   一个代表 **FootnoteOptions** 对象的变量。

## 类型

WdNumberingRule

## 示例


```JavaScript
/*本示例判断如果第一节中的脚注编号方式是在每个分节符后重新开始，则将编号方式设置为在每页上重新开始。*/
function test() {
    let range = Application.ActiveDocument.Sections.Item(1).Range
    if (range.FootnoteOptions.NumberingRule == wdRestartSection) {
        range.FootnoteOptions.NumberingRule = wdRestartPage
    }
}
```


```JavaScript
/*本示例判断活动文档上所选内容中分页符或分节符之后的脚注的编号方式，并通知用户。*/
function test() {
    switch (Selection.FootnoteOptions.NumberingRule) {
        case wdRestartContinuous:
            alert("连续分配编号")
            break
        case wdRestartPage:
            alert("重设每一页的页码")
            break
        case wdRestartSection:
            alert("重设每一节的节号")
            break
    }
}
```
