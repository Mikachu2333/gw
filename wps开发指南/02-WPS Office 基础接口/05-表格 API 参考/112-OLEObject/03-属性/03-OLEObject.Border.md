# OLEObject.Border

返回一个 **[Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Border/obj)** 对象，它代表对象的边框。



## 语法

express.**Border**

express   一个代表 **OLEObject** 对象的变量。

## 类型

Border

## 示例


```JavaScript
/*此示例将第一张工作表中的第一个 OLE 对象边框粗细设置为粗线。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects(1).Border.Weight = xlThick
}
```


```JavaScript
/*此示例显示活动工作表中的第二个 OLE 对象边框的线条样式是否为无线。*/
function test() {
    alert(ActiveSheet.OLEObjects(2).Border.LineStyle == xlLineStyleNone)
}
```
