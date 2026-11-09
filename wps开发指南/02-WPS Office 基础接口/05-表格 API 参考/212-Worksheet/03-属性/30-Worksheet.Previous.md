# Worksheet.Previous

返回代表上一个工作表的 [Worksheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/obj)对象。



## 语法

express.**Previous**

express   一个代表 **Worksheet** 对象的变量。

## 类型

Object

## 说明


如果指定对象为区域，则此属性的作用是仿效 Shift+Tab；但此属性只是返回上一单元格，并不选定它。

在保护工作表上，该属性返回上一个未锁定的单元格。在未保护的工作表上，该属性通常返回指定单元格左侧相邻的单元格。



## 示例


```JavaScript
/*此示例在工作表Sheet1后新建一张工作表，再选定新工作表前一张工作表。*/
function test() {
    let sheet = Application.Worksheets.Add(null, Worksheets.Item("Sheet1"))
    sheet.Previous.Select()
}
```


```JavaScript
/*此示例在Sheet1前新建一张工作表，并为该工作表的B3单元格赋值。*/
function test() {
    Application.Worksheets.Add()
    Application.Worksheets.Item("Sheet1").Previous.Range("B3").Value2 = "WPS"
}
```
