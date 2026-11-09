# Shape.ZOrderPosition

返回指定的形状在 z-顺序中的位置。只读。



## 语法

express.**ZOrderPosition**

express   一个代表 **Shape** 对象的变量。

## 类型

number（int 精度）

## 说明


Shapes(1) 返回 z-顺序中的最后一个形状，Shapes(Shapes.Count) 返回 z-顺序中的第一个形状。

若要设置形状在 z-顺序中的位置，请用 **ZOrder** 方法。

形状在 z-顺序中的位置与 **Shapes** 集合中形状的索引号相对应。例如，如果幻灯片上有四个形状，表达式 slide.Shapes(1) 在 z-顺序的后面返回该形状，表达式 slide.Shapes(4) 在 z-顺序的前面返回该形状。

如向一个集合添加新图形，其默认的添加位置是 z-顺序中的前面位置。



## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片上中添加椭圆，如果幻灯片中有至少一个其他形状，则将该椭圆放置在 z-顺序中倒数第二的位置上。*/
function test() {
    let slide = Application.ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeOval, 100, 100, 100, 300)
    while (shape.ZOrderPosition > 2) {
        shape.ZOrder(msoSendBackward)
    }
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上的第三个形状是否置于顶层。*/
function test() {
    let shapes = Application.ActivePresentation.Slides.Item(1).Shapes
    alert(shapes.Item(3).ZOrderPosition == shapes.Count)
}
```
