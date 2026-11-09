# ShapeRange.ShapeStyle

设置或返回指定对象的形状样式索引。



## 语法

express.**ShapeStyle**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoShapeStyleIndex

## 说明


 **ShapeStyle** 属性的值可以是 **[MsoShapeStyleIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoShapeStyleIndex)** 常量之一。



## 示例


```JavaScript
/*本示例设置活动演示文稿上第一张幻灯片中第一个和第二个形状的形状样式。*/
function test() {
    let shapeRange = ActivePresentation.Slides.Item(1).Shapes.Range([1, 2])
    shapeRange.ShapeStyle = msoShapeStylePreset10
}
```


```JavaScript
/*本示例设置第一篇演示文稿上第二张幻灯片中所有形状的形状样式。*/
function test() {
    Presentations.Item(1).Slides.Item(2).Shapes.SelectAll()
    ActiveWindow.Selection.ShapeRange.ShapeStyle = msoShapeStylePreset20
}
```
