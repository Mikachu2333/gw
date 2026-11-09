# Selection.ChildShapeRange

返回一个代表选定范围的子形状的 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj)** 对象。



## 语法

express.**ChildShapeRange**

express   一个代表 **Selection** 对象的变量。

## 类型

ShapeRange

## 示例


```JavaScript
/*本示例在活动窗口选择的形状中添加阴影格式。绿色浮凸效果的阴影距该形状的右边 3 磅，下边 2 磅。*/
function test() {
    let shapeRange = ActiveWindow.Selection.ChildShapeRange
    shapeRange.Shadow.Type = msoShadow17
    shapeRange.Shadow.ForeColor.RGB = RGB(0, 255, 0)
    shapeRange.Shadow.Transparency = 0.5
    shapeRange.Shadow.OffsetX = 3
    shapeRange.Shadow.OffsetY = 2
}
```


```JavaScript
/*本示例显示第一个窗口中选择的形状是否为子形状。*/
function test() {
    let shapeRange = Windows.Item(1).Selection.ChildShapeRange
    alert(shapeRange.Child == msoTrue)
}
```
