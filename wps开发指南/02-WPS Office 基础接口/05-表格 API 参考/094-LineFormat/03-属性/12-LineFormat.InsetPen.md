# LineFormat.InsetPen

返回或设置线条是否绘制在指定形状的边界以内。可读/写。



## 语法

express.**InsetPen**

express   一个代表 **LineFormat** 对象的变量。

## 类型

MsoTriState

## 说明


如果线条绘制在形状的边界以内，则为 **msoTrue** (-1)；否则为 **msoFalse** (0)。



## 示例


```JavaScript
/*下面的代码示例将两个矩形添加到活动工作表，第一个矩形的线条绘制在其边界以内，第二个矩形的线条绘制在其边界上。*/
function test() {
    let shpNew = Application.ActiveSheet.Shapes.AddShape(msoShapeRectangle, 200, 150, 150, 100)
    shpNew.Line.Weight = 24
    shpNew.Line.InsetPen = msoTrue
    let shpNew2 = ActiveSheet.Shapes.AddShape(msoShapeRectangle, 200, 150, 150, 100)
    shpNew2.Line.Weight = 24
    shpNew2.Line.InsetPen = msoFalse
}
```


```JavaScript
/*本示例显示第一张工作表新建形状的线条是否绘制在其边界以内。*/
function test() {
    let shapes = Worksheets.Item(1).Shapes
    let shape = shapes.AddShape(msoShapeCross, 10, 10, 50, 70)
    alert(shape.Line.InsetPen == msoTrue)
}
```
