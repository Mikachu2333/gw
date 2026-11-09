# ShapeRange.ShapeStyle

设置或返回指定形状范围中形状的形状样式。可读/写 **MsoShapeStyleIndex** 。



## 语法

express.**ShapeStyle**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoShapeStyleIndex

## 示例


```JavaScript
/*本示例设置活动文档上第一个和第二个形状的形状样式。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range([1, 2])
    shapeRange.ShapeStyle = msoShapeStylePreset10
}
```


```JavaScript
/*本示例设置第一个文档中所有形状的形状样式。*/
function test() {
    Documents.Item(1).Shapes.SelectAll()
    Selection.ShapeRange.ShapeStyle = msoShapeStylePreset20
}
```
