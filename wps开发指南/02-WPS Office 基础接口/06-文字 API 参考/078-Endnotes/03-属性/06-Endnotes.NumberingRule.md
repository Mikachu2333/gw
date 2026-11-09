# Endnotes.NumberingRule

返回或设置在分页符或分节符后对尾注进行编号的方式。可读写 **[WdNumberingRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdNumberingRule)** 类型。



## 语法

express.**NumberingRule**

express   一个代表 **Endnotes** 对象的变量。

## 类型

WdNumberingRule

## 示例


```JavaScript
/*本示例在活动文档中的每个分节符后对尾注重新开始编号。*/
function test() {
    ActiveDocument.Endnotes.NumberingRule = wdRestartSection
}
```


```JavaScript
/*本示例判断活动文档上第一节的文档部分中分页符或分节符之后的尾注的编号方式，并通知用户。*/
function test() {
    let range = ActiveDocument.Sections.Item(1).Range
    switch (range.Endnotes.NumberingRule) {
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
