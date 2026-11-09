# ShapeRange.ShapeStyle

返回或设置 **[MsoShapeStyleIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoShapeStyleIndex)** 类型的值，该值代表形状区域的形状样式。可读/写。



## 语法

express.**ShapeStyle**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoShapeStyleIndex

## 示例


```JavaScript
/*本示例先在第一张工作表创建shpRange对象，然后重新设置对象的形状样式。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([1, 2])
    shpRange.ShapeStyle = msoShapeStylePreset10
}
```


```JavaScript
/*本示例将活动工作表的所有形状重新设置形状样式。*/
function test() {
    let shapes = ActiveSheet.Shapes
    shapes.SelectAll()
    Selection.ShapeRange.ShapeStyle = msoShapeStylePreset20
}
```
