# Application.ActiveWorkbook

返回一个 **[Workbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/obj)** 对象，该对象代表活动窗口（顶部窗口）中的工作簿。只读。如果没有打开的窗口，或者“信息”窗口或“剪贴板”窗口为活动窗口，则返回 **null** 。



## 语法

express.**ActiveWorkbook**

express   一个代表 **Application** 对象的变量。

## 类型

Workbook

## 示例


```JavaScript
/*本示例显示活动工作簿的名称。*/
function test() {
    alert("The name of the active workbook is " + Application.ActiveWorkbook.Name)
}
```


```JavaScript
/*本示例将活动工作簿的 Saved 属性改为true即代表活动工作簿已保存。*/
function test() {
    Application.ActiveWorkbook.Saved = true
}
```
