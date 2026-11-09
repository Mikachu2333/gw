# ChartObject.ShapeRange

返回一个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象，它代表指定的一个或多个对象。只读。



## 语法

express.**ShapeRange**

express   一个代表 **ChartObject** 对象的变量。

## 类型

ShapeRange

## 示例


```JavaScript
/*此示例创建一个形状区域，该区域代表第一张工作表上的图表。*/
function test() {
    let shprange = Application.Worksheets.Item(1).ChartObjects().ShapeRange
}
```


```JavaScript
/*此示例删除工作表 Sheet1 中图表 Chart 2 的形状区域。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects("Chart 2")
    chartobject.ShapeRange.Delete()
}
```
