# ShapeRange.Flip

水平或垂直翻转一个图形。



## 语法

express.**Flip(FlipCmd)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FlipCmd | 必选 | MsoFlipCmd | 翻转方向。 |

## 返回值

void

## 示例


```JavaScript
/*本示例首先向活动文档添加一个三角形，然后复制此三角形，再垂直翻转复制的三角形并将其前景色设为红色。*/
function test() {
    let newshape = ActiveDocument.Shapes.AddShape(msoShapeRightTriangle, 150, 150, 50, 50)
    let shapeRange = newshape.Duplicate()
    shapeRange.Flip(msoFlipVertical)
    shapeRange.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例将第一个文档中所有的形状水平翻转。*/
function test() {
    Documents.Item(1).Shapes.SelectAll()
    Selection.ShapeRange.Flip(msoFlipHorizontal)
}
```
