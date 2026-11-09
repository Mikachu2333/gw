# OLEObjects.Placement

返回或设置一个包含 **[XlPlacement](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPlacement)** 常量的 **Variant** 值，它代表对象附加到它所在的单元格的方式。



## 语法

express.**Placement**

express   一个代表 **OLEObjects** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*此示例显示活动工作表中所有 OLE 对象附加到它所在的单元格的方式是否为对象随单元格移动和调整大小。*/
function test() {
    alert(ActiveSheet.OLEObjects().Placement == xlMoveAndSize)
}
```


```JavaScript
/*此示例将第一张工作表中所有 OLE 对象附加到它所在的单元格的方式设置为自由浮动。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects().Placement = xlFreeFloating
}
```
