# Worksheet.UsedRange

返回一个 [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj) 对象，该对象表示指定工作表上所使用的区域。只读。



## 语法

express.**UsedRange**

express   一个代表 **Worksheet** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例选定 Sheet1 中的已用区域。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    Application.ActiveSheet.UsedRange.Select()
}
```


```JavaScript
/*本示例显示活动工作表总共使用多少单元格。*/
function test() {
    alert("A total of " + ActiveSheet.UsedRange.Count + "  cells are used ")
}
```
