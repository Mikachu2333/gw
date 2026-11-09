# OLEObject.ShapeRange

返回一个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象，它代表指定的一个或多个对象。只读。



## 语法

express.**ShapeRange**

express   一个代表 **OLEObject** 对象的变量。

## 类型

ShapeRange

## 示例


```JavaScript
/*此示例选中第一张工作表的第一个 OLE 对象中的ShapeRange对象。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects(1).ShapeRange.Select()
}
```


```JavaScript
/*此示例显示活动工作表中的第二个 OLE 对象的 ShapeRange 集合中形状的数量。*/
function test() {
    alert(ActiveSheet.OLEObjects(2).ShapeRange.Count)
}
```
