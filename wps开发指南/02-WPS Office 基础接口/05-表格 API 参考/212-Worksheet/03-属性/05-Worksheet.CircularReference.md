# Worksheet.CircularReference

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示工作表上包含第一个循环引用的区域，或返回 **null** （如果工作表上没有循环引用）。在继续执行计算之前，必须删除循环引用。



## 语法

express.**CircularReference**

express   一个代表 **Worksheet** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例选定 Sheet1 第一个循环引用中的第一个单元格。*/
function test() {
    Worksheets.Item("Sheet1").CircularReference.Select()
}
```


```JavaScript
/*本示例显示活动工作表上第一个循环引用中的第一个单元格的地址。*/
function test() {
    alert(ActiveSheet.CircularReference.Address())
}
```
