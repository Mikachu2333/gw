# EndnoteOptions.NumberingRule

返回或设置在分页符或分节符之后脚注或尾注的编号方式。可读写 **[WdNumberingRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdNumberingRule)** 。



## 语法

express.**NumberingRule**

express   一个代表 **EndnoteOptions** 对象的变量。

## 类型

WdNumberingRule

## 示例


```JavaScript
/*本示例将所选内容中分页符或分节符之后的尾注的编号方式设置为wdRestartSection。*/
function test() {
    Selection.EndnoteOptions.NumberingRule = wdRestartSection
}
```


```JavaScript
/*本示例判断活动文档上第一节的文档部分中分页符或分节符之后的尾注的编号方式，并通知用户。*/
function test() {
    let range = ActiveDocument.Sections.Item(1).Range
    switch (range.EndnoteOptions.NumberingRule) {
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
