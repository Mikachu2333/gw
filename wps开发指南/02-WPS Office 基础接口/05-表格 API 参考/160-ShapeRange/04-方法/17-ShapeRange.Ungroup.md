# ShapeRange.Ungroup

取消指定形状或者形状区域中组合形状的组合。取消指定形状或形状区域中图片和 OLE 对象的组合。



## 语法

express.**Ungroup()**

express   一个代表 **ShapeRange** 对象的变量。

## 返回值

一个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象，它代表取消组合的形状。

## 说明


由于一组形状被视为单个对象，因此对形状进行组合或取消组合操作时，将会更改 **[Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/obj)** 集合中的项目数，并更改集合中受影响的项目之后的项目索引号。



## 示例


```JavaScript
/*本示例取消第一张工作表中新建的ShapeRange对象中的所有组合*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([1])
    shpRange.Ungroup()
}
```


```JavaScript
/*本示例取消活动工作表中的所有组合。*/
function test() {
    let shapes = ActiveSheet.Shapes
    shapes.SelectAll()
    Selection.ShapeRange.Ungroup()
}
```
