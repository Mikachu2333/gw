# Selection.ShapeRange

返回一个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/obj)** 集合，该集合代表选定内容中的所有 **Shape** 对象。只读。



## 语法

express.**ShapeRange**

express   一个代表 **Selection** 对象的变量。

## 类型

ShapeRange

## 说明


形状范围可以包含图形、形状、图片、OLE 对象、ActiveX 控件、文字对象和标注。



## 示例


```JavaScript
/*本示例为选定内容中的所有图形设置阴影。*/
function test() {
    Selection.ShapeRange.Shadow.Type = msoShadow6
}
```


```JavaScript
/*本示例将第一个窗口上选中图形的大小设置为宽100磅、高50磅*/
function test() {
    let shaperange = Windows.Item(1).Selection.ShapeRange
    shaperange.LockAspectRatio = msoFalse
    shaperange.Width = 100
    shaperange.Height = 50
}
```
