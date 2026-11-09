# Shape.Flip

水平或垂直翻转一个图形。



## 语法

express.**Flip(FlipCmd)**

express   一个代表 **Shape** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FlipCmd | 必选 | MsoFlipCmd | 翻转方向。 |

## 返回值

void

## 示例


```JavaScript
/*本示例首先向活动文档添加一个三角形，然后复制此三角形，再垂直翻转复制的三角形并将其设为红色。*/
function test() {
    let shape = ActiveDocument.Shapes.AddShape(msoShapeRightTriangle, 150, 150, 50, 50).Duplicate()
    shape.Fill.ForeColor.RGB = RGB(255, 0, 0)
    shape.Flip(msoFlipVertical)
}
```


```JavaScript
/*本示例将第一个文档中的第二个形状水平翻转。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(2)
    shape.Flip(msoFlipHorizontal)
}
```
