# TableOfFigures.LowerHeadingLevel

返回或设置图表目录的结束标题级别。可读写 **Long** 类型。



## 语法

express.**LowerHeadingLevel**

express   一个代表 **TableOfFigures** 对象的变量。

## 类型

number（int4 精度）

## 说明


该属性与用于目录 (TOC) 域的 \\o 开关的结束值对应。使用 **[UpperHeadingLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableOfFigures/member/UpperHeadingLevel)** 属性可设置起始标题级别。例如，要设置 TOC 域语法 {TOC \\o "1-3"}，可将 **LowerHeadingLevel** 属性设置为 3，将 **UpperHeadingLevel** 属性设置为 1。



## 示例


```JavaScript
/*本示例为活动文档中第一个图表目录设置格式，以编译设置为“标题 8”或“标题 9”样式格式的所有标题。*/
function test() {
    if (ActiveDocument.TablesOfFigures.Count >= 1) {
        let tableOfFigures = ActiveDocument.TablesOfFigures.Item(1)
        tableOfFigures.UseHeadingStyles = true
        tableOfFigures.UseFields = false
        tableOfFigures.UpperHeadingLevel = 8
        tableOfFigures.LowerHeadingLevel = 9
    }
}
```


```JavaScript
/*本示例显示第一个文档上第二个图表目录的结束标题级别。*/
function test() {
    let tableOfFigures = Documents.Item(1).TablesOfFigures.Item(2)
    alert(tableOfFigures.LowerHeadingLevel)
}
```
