# OLEObject.Interior

返回一个 **[Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/obj)** 对象，它代表指定对象的内部。



## 语法

express.**Interior**

express   一个代表 **OLEObject** 对象的变量。

## 类型

Interior

## 示例


```JavaScript
/*此示例将第一张工作表中的第一个 OLE 对象内部设置为红色。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects(1).Interior.ColorIndex = 3
}
```


```JavaScript
/*此示例显示活动工作表中的第二个 OLE 对象内部颜色是否为绿色。*/
function test() {
    alert(ActiveSheet.OLEObjects(2).Interior.Color == RGB(0, 255, 0))
}
```
