# OLEObject.Placement

返回或设置一个包含 **[XlPlacement](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPlacement)** 常量的 **Variant** 值，它代表对象附加到它所在的单元格的方式。



## 语法

express.**Placement**

express   一个代表 **OLEObject** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*此示例将第一张工作表中的第二个 OLE 对象附加到它所在的单元格的方式设置为自由浮动。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects(2).Placement = xlFreeFloating
}
```


```JavaScript
/*此示例显示活动工作表中的第一个 OLE 对象附加到它所在的单元格的方式是否为对象随单元格移动。*/
function test() {
    alert(ActiveSheet.OLEObjects(1).Placement == xlMove)
}
```
