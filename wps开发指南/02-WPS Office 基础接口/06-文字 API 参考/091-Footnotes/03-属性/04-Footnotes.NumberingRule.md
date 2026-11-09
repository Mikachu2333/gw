# Footnotes.NumberingRule

返回或设置在分页符或分节符之后的脚注或尾注的编号方式。可读写 **[WdNumberingRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdNumberingRule)** 类型。



## 语法

express.**NumberingRule**

express   一个代表 **Footnotes** 对象的变量。

## 类型

WdNumberingRule

## 示例


```JavaScript
/*如果将第一节中的脚注编号设置为在每个分节符后重新开始，则以下示例设置每页都重新开始编号。*/
function test() {
    let range = ActiveDocument.Sections.Item(1).Range
    if (range.Footnotes.NumberingRule == wdRestartSection) {
        range.Footnotes.NumberingRule = wdRestartPage
    }
}
```


```JavaScript
/*本示例显示所选内容中脚注的编号方式是否为wdRestartContinuous。*/
function test() {
    alert(Selection.Footnotes.NumberingRule == wdRestartContinuous)
}
```
