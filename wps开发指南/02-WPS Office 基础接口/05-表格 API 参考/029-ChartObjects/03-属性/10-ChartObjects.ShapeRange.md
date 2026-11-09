# ChartObjects.ShapeRange

返回一个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象，它代表指定的一个或多个对象。只读。



## 语法

express.**ShapeRange**

express   一个代表 **ChartObjects** 对象的变量。

## 类型

ShapeRange

## 示例


```JavaScript
/*此示例创建一个形状区域，该区域代表第一张工作表上的图表。*/
function test() {
    let sr = Application.Worksheets.Item(1).ChartObjects().ShapeRange
}
```


```JavaScript
/*此示例选择工作表 Sheet1 上所有图表的形状区域。*/
function test() {
    let chartobjects = Application.Sheets.Item("Sheet1").ChartObjects()
    chartobjects.ShapeRange.Select()
}
```
