# Worksheet.Shapes

返回一个 [Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/obj)集合，它代表工作表上的所有形状。只读。



## 语法

express.**Shapes**

express   一个代表 **Worksheet** 对象的变量。

## 类型

Shapes

## 示例


```JavaScript
/*此示例向第一张工作表中添加兰色的虚线。*/
function test() {
    let Wshapes = Application.Worksheets.Item(1).Shapes.AddLine(10, 10, 250, 250).Line
    Wshapes.DashStyle = msoLineDashDotDot
    Wshapes.ForeColor.RGB = RGB(50, 0, 128)
}
```


```JavaScript
/*本示例选中活动工作表上的所有形状。*/
function test() {
    Application.ActiveSheet.Shapes.SelectAll()
}
```
