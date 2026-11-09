# ShapeRange.ZOrderPosition

返回一个 **Long** 类型的值，该值代表指定的形状在 Z 顺序中的位置。只读。



## 语法

express.**ZOrderPosition**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（int4 精度）

## 说明


`Shapes.Item(1)` 返回 Z 顺序中的最后一个形状，而 `Shapes.Item(Shapes.Count)` 返回 Z 顺序中的第一个形状。该属性为只读。要设置形状在 Z 顺序中的位置，请使用 **ZOrder** 方法。

形状在 Z 顺序中的位置与 Shapes 集合中形状的索引号相对应。例如，如果在 myDocument 上有四个形状，则表达式 `myDocument.Shapes.Item(1)` 返回 Z 顺序中的最后一个形状，而表达式 `myDocument.Shapes.Item(4)` 返回 Z 顺序中的第一个形状。

无论何时将新形状添加到集合中，默认情况下该形状都将添加到 Z 顺序的最前端。



## 示例


```JavaScript
/*本示例向活动文档中添加椭圆，如果活动文档至少有一个其他形状，则将该椭圆放置在 Z 顺序中倒数第二的位置上。*/
function test() {
    let shapes = ActiveDocument.Shapes
    let shape = shapes.AddShape(msoShapeOval, 100, 100, 100, 300)
    let shapeRange = shapes.Range(shape.Name)
    while (shapeRange.ZOrderPosition > 2) {
        shapeRange.ZOrder(msoSendBackward)
    }
}
```


```JavaScript
/*本示例显示选中形状在 Z 顺序中的位置。*/
function test() {
    alert(Selection.ShapeRange.ZOrderPosition)
}
```
