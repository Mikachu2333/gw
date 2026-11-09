# Worksheet.Cells

返回一个 [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)对象，它代表工作表中的所有单元格（不仅仅是当前使用的单元格）。



## 语法

express.**Cells**

express   一个代表 **Worksheet** 对象的变量。

## 类型

Range

## 说明


因为 **Item** 属性是 [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj) 对象的默认属性，所以可以在 **Cells** 关键字后面紧接着指定行和列索引。有关详细信息，请参阅 **Item** 属性和本主题的示例。

在不使用对象识别符的情况下，使用此属性将返回一个 [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj) 对象，它代表活动工作表中所有的单元格。



## 示例


```JavaScript
/*本示例将 Sheet1 中单元格 C5 的字号设置为 14 磅。*/
function test() {
    Application.Worksheets.Item("Sheet1").Cells.Item(5, 3).Font.Size = 14
}
```


```JavaScript
/*本示例清除 Sheet1 上第一个单元格的公式。*/
function test() {
    Application.Worksheets.Item("Sheet1").Cells.Item(1).ClearContents()
}
```


```JavaScript
/*本示例将 Sheet1 上所有单元格的字体设置为 8 磅“Arial”字体*/
function test() {
    Application.Worksheets.Item("Sheet1").Cells.Font.Name = "Arial"
    Application.Worksheets.Item("Sheet1").Cells.Font.Size = 8
}
```
