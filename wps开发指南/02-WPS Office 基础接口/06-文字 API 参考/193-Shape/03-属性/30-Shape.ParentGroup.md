# Shape.ParentGroup

返回一个 **Shape** 对象，该对象代表子形状或子形状范围的通用父形状。



## 语法

express.**ParentGroup**

express   一个代表 **Shape** 对象的变量。

## 类型

Shape

## 示例


```JavaScript
/*本示例在活动文档中创建两个形状并对其进行分组。然后利用一个形状访问该组的父组，并使用同样的填充颜色填充父组中的所有形状。本示例假定活动文档当前并不包括形状，如果包括形状，则产生错误。*/
function test() {
    //Add two shapes to active document and group
    let shapes = ActiveDocument.Shapes
    shapes.AddShape(msoShapeOval, 72, 72, 100, 100)
    shapes.AddShape(msoShapeHeart, 110, 120, 100, 100)
    shapes.Range([1, 2]).Group()
    let shape = shapes.Item(1).GroupItems.Item(1).ParentGroup
    shape.Fill.ForeColor.RGB = RGB(100, 0, 255)
}
```


```JavaScript
/*本示例在第一个文档中创建两个形状并对其进行分组。然后利用一个形状访问该组的父组，并选中父组。本示例假定第一个文档当前并不包括形状，如果包括形状，则产生错误。*/
function test() {
    let shapes = Documents.Item(1).Shapes
    shapes.AddShape(msoShapeRectangle, 100, 200, 100, 150)
    shapes.AddShape(msoShapeRectangle, 300, 400, 200, 100)
    shapes.Range([1, 2]).Group()
    let shape = shapes.Item(1).GroupItems.Item(2).ParentGroup
    shape.Select()
}
```
