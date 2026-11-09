# Shape.ZOrderPosition

返回一个 **Long** 类型的值，该值代表指定的形状在 Z 顺序中的位置。只读。



## 语法

express.**ZOrderPosition**

express   一个代表 **Shape** 对象的变量。

## 类型

number（int4 精度）

## 说明


`Shapes(1)` 返回 Z 顺序中的最后一个形状，而 `Shapes(Shapes.Count)` 返回 Z 顺序中的第一个形状。该属性为只读。要设置形状在 Z 顺序中的位置，请使用 **ZOrder** 方法。

形状在 Z 顺序中的位置与 Shapes 集合中形状的索引号相对应。例如，如果在活动文档上有四个形状，则表达式 `ActiveDocument.Shapes(1)` 返回 Z 顺序中的最后一个形状，而表达式 `ActiveDocument.Shapes(4)` 返回 Z 顺序中的第一个形状。

无论何时将新形状添加到集合中，默认情况下该形状都将添加到 Z 顺序的最前端。



## 示例


```JavaScript
/*此示例首先向活动文档中添加一个椭圆形。如果该文档另外至少还有一个形状，则按照 Z 顺序将此椭圆形放置在倒数第二的位置。*/
function test() {
    let shape = ActiveDocument.Shapes.AddShape(msoShapeOval, 100, 100, 100, 300)
    while (shape.ZOrderPosition > 2) {
        shape.ZOrder(msoSendBackward)
    }
}
```


```JavaScript
/*本示例显示第一个文档中第三个形状是否置于顶层。*/
function test() {
    let shapes = Documents.Item(1).Shapes
    alert(shapes.Item(3).ZOrderPosition == shapes.Count)
}
```
