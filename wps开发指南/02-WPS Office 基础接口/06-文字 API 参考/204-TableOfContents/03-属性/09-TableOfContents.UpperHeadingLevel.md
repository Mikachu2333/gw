# TableOfContents.UpperHeadingLevel

返回或设置目录的起始标题级别。可读写 **Long** 类型。



## 语法

express.**UpperHeadingLevel**

express   一个代表 **TableOfContents** 对象的变量。

## 类型

number（int4 精度）

## 说明


该属性与用于目录 (TOC) 域的 \\o 开关的起始值对应。使用 **[LowerHeadingLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfContents/member/LowerHeadingLevel)** 属性可设置结束标题级别。例如，要设置 TOC 域语法 {TOC \\o "1-3"}，可将 **LowerHeadingLevel** 属性设置为 3，将 **UpperHeadingLevel** 属性设置为 1。



## 示例


```JavaScript
/*本示例为活动文档中第一个目录设置格式，以编撰设置为“标题 2”或“标题 3”样式格式的所有标题。*/
function test() {
    if (ActiveDocument.TablesOfContents.Count >= 1) {
        let tableOfContents = ActiveDocument.TablesOfContents.Item(1)
        tableOfContents.UseHeadingStyles = true
        tableOfContents.UseFields = false
        tableOfContents.UseHeadingStyles = 2
        tableOfContents.LowerHeadingLevel = 3
    }
}
```


```JavaScript
/*本示例显示第一个文档上最后一个目录的起始标题级别。*/
function test() {
    let tablesOfContents = Documents.Item(1).TablesOfContents
    alert(tablesOfContents.Item(tablesOfContents.Count).UpperHeadingLevel)
}
```
