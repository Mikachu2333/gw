# Shape.CanvasItems

返回一个 **CanvasShapes** 对象，该对象代表绘图画布上图形的集合。



## 语法

express.**CanvasItems**

express   一个代表 **Shape** 对象的变量。

## 类型

CanvasShapes

## 示例


```JavaScript
/*本示例在活动文档中创建一个新的绘图画布，并在其上添加一个圆圈。*/
function test() {
    let shape = ActiveDocument.Shapes.AddCanvas(100, 75, 150, 200)
    shape.CanvasItems.AddShape(msoShapeOval, 25, 25, 150, 150)
}
```


```JavaScript
/*本示例显示第一个文档中第一个形状（绘图画布）上图形的数量。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(1)
    alert(shape.CanvasItems.Count)
}
```
