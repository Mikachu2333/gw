# Range.Previous

返回一个代表上一个单元格的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。



## 语法

express.**Previous**

express   一个代表 **Range** 对象的变量。

## 类型

Range

## 说明


如果指定对象为区域，则此属性的作用是仿效 Shift+Tab；但此属性只是返回上一单元格，并不选定它。

在保护工作表上，该属性返回上一个未锁定的单元格。在未保护的工作表上，该属性通常返回指定单元格左侧相邻的单元格。



## 示例


```JavaScript
/*此示例选定 sheet1 中上一个未锁定单元格。如果 sheet1 未保护，选定的单元格将是紧靠活动单元格左边的单元格。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    Application.ActiveCell.Previous.Select()
}
```


```JavaScript
/*本示例将 B1 的上一个单元格的值设置为 a1，并将文本设置为斜体*/
function test() {
    let b1Previous = Range("B1").Previous
    b1Previous.Select()
    b1Previous.Font.Italic = true
}
```
