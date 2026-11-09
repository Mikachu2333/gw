# ShapeRange.Shadow

返回一个 **ShadowFormat** 对象，该对象代表指定形状的阴影格式。



## 语法

express.**Shadow**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

ShadowFormat

## 示例


```JavaScript
/*本示例设置活动文档中第一个和第二个形状的阴影的前景色和宽度。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range([1, 2])
    shapeRange.Shadow.ForeColor.RGB = RGB(255, 0, 0)
    shapeRange.Shadow.Size = 120
}
```


```JavaScript
/*本示例将第一个文档中所有形状的阴影设为半透明的绿色。*/
function test() {
    Documents.Item(1).Shapes.SelectAll()
    let shadowFormat = Selection.ShapeRange.Shadow
    shadowFormat.ForeColor.RGB = RGB(0, 255, 0)
    shadowFormat.Transparency = 0.5
}
```
